package chaincode

import (
    "encoding/json"
    "fmt"

    "github.com/hyperledger/fabric-contract-api-go/v2/contractapi"
)

// Const represents weight for each sensibility
const (
    WeightView         = 3.0
    WeightDelete       = 2.0
    WeightModify       = 4.0
    WeightCreate       = 5.0
    WeightLogin        = 1.0
    WeightSensitive    = 3.0
    WeightNonSensitive = 1.0
)

// ImpactTable represents impact score table
var impactTable = map[string]map[bool][3]int{
    "create": {
        true:  {0, 1, 0},
        false: {0, 1, 0},
    },
    "view": {
        true:  {1, 0, 0},
        false: {0, 0, 0},
    },
    "modify": {
        true:  {0, 1, 1},
        false: {0, 1, 1},
    },
    "delete": {
        true:  {0, 1, 1},
        false: {0, 1, 1},
    },
    "login": {
        true:  {1, 1, 1},
        false: {0, 1, 1},
    },
}

// SmartContract provides functions for managing a Log
type SmartContract struct {
    contractapi.Contract
}

// Log describes basic details of what makes up a simple log
// Insert struct field in alphabetic order => to achieve determinism across languages
// golang keeps the order when marshal to json but doesn't order automatically
type Log struct {
    ID          string `json:"ID"`
    Timestamp   string `json:"timestamp"`
    UserID      string `json:"userID"`
    Action      string `json:"action"`
    Sensitivity bool   `json:"sensitivity"`
    Status      bool   `json:"status"`
}

// InitLedger adds a base set of logs to the ledger
func (s *SmartContract) InitLedger(ctx contractapi.TransactionContextInterface) error {
    logs := []Log{
        {ID: "log1", Timestamp: "2020-06-25 01:53:37", UserID: "guest", Action: "modify", Sensitivity: true, Status: true},
        {ID: "log2", Timestamp: "2020-08-19 16:51:15", UserID: "guest", Action: "modify", Sensitivity: false, Status: true},
        {ID: "log3", Timestamp: "2020-06-06 18:57:31", UserID: "guest", Action: "modify", Sensitivity: true, Status: true},
        {ID: "log4", Timestamp: "2021-04-04 21:47:12", UserID: "guest", Action: "modify", Sensitivity: true, Status: false},
        {ID: "log5", Timestamp: "2022-04-08 05:12:14", UserID: "guest", Action: "modify", Sensitivity: false, Status: true},
        {ID: "log6", Timestamp: "2024-05-06 10:28:58", UserID: "guest", Action: "modify", Sensitivity: true, Status: true},
        {ID: "log7", Timestamp: "2024-05-06 12:27:38", UserID: "guest", Action: "update", Sensitivity: false, Status: true},
        {ID: "log8", Timestamp: "2024-05-07 10:28:58", UserID: "guest", Action: "create", Sensitivity: true, Status: false},
        {ID: "log9", Timestamp: "2024-05-08 10:28:58", UserID: "guest", Action: "view", Sensitivity: false, Status: true},
        {ID: "log10", Timestamp: "2024-05-09 10:28:58", UserID: "guest", Action: "delete", Sensitivity: false, Status: false},
    }

    for _, log := range logs {
        logJSON, err := json.Marshal(log)
        if err != nil {
            return err
        }

        compositeKey, err := ctx.GetStub().CreateCompositeKey("user~logID", []string{log.UserID, log.ID})
        if err != nil {
            return fmt.Errorf("failed to create composite key: %v", err)
        }

        return ctx.GetStub().PutState(compositeKey, logJSON)
    }

    return nil
}

// RiskAssessment return the result after evaluating user logs
func (s *SmartContract) RiskAssessment(ctx contractapi.TransactionContextInterface, user string) (float64, error) {
    logsForUser, err := s.GetLogForUser(ctx, user)
    if err != nil {
        return 0.0, err
    }
    riskCreate, errC := s.CalculateActionRisk(logsForUser, "create")
    riskView, errV := s.CalculateActionRisk(logsForUser, "view")
    riskModify, errM := s.CalculateActionRisk(logsForUser, "modify")
    riskDelete, errD := s.CalculateActionRisk(logsForUser, "delete")
    riskLogin, errL := s.CalculateActionRisk(logsForUser, "login")

    // Error handling
    if errC != nil || errV != nil || errM != nil || errD != nil || errL != nil {
        return 0.0, fmt.Errorf("error while calculating action risk : %v %v %v %v %v, logsForUser size %d", errC, errV, errM, errD, errL, len(logsForUser))
    }

    WeightsVDM := WeightView + WeightDelete + WeightModify
    WeightsCL := WeightCreate + WeightLogin

    totalWeights := WeightsVDM + WeightsCL

    if totalWeights == 0 {
        return 0, fmt.Errorf("all weights are set to 0, impossible computing total risk")
    }

    // Total risk computing
    weightedSumVDM := (WeightView * riskView) +
        (WeightDelete * riskDelete) +
        (WeightModify * riskModify)

    weightedSumCL := (WeightCreate * riskCreate) +
        (WeightLogin * riskLogin)

    totalRisk := weightedSumVDM/WeightsVDM + weightedSumCL/WeightsCL
    return totalRisk, nil
}

// CreateLog issues a new log to the world state with given details.
func (s *SmartContract) CreateLog(ctx contractapi.TransactionContextInterface, id string, timestamp string, userID string, action string, sensitivity bool, status bool) error {
    exists, err := s.LogExists(ctx, id)
    if err != nil {
        return err
    }
    if exists {
        return fmt.Errorf("the log %s already exists", id)
    }

    log := Log{
        ID:          id,
        Timestamp:   timestamp,
        UserID:      userID,
        Action:      action,
        Sensitivity: sensitivity,
        Status:      status,
    }
    logJSON, err := json.Marshal(log)
    if err != nil {
        return fmt.Errorf("failed to marshal log: %v", err)
    }

    compositeKey, err := ctx.GetStub().CreateCompositeKey("user~logID", []string{log.UserID, log.ID})
    if err != nil {
        return fmt.Errorf("failed to create composite key: %v", err)
    }

    return ctx.GetStub().PutState(compositeKey, logJSON)
}

// ReadLog returns the log stored in the world state with given id.
func (s *SmartContract) ReadLog(ctx contractapi.TransactionContextInterface, id string) (*Log, error) {
    logJSON, err := ctx.GetStub().GetState(id)
    if err != nil {
        return nil, fmt.Errorf("failed to read from world state: %v", err)
    }
    if logJSON == nil {
        return nil, fmt.Errorf("the log %s does not exist", id)
    }

    var log Log
    err = json.Unmarshal(logJSON, &log)
    if err != nil {
        return nil, err
    }

    return &log, nil
}

// LogExists returns true when log with given ID exists in world state
func (s *SmartContract) LogExists(ctx contractapi.TransactionContextInterface, id string) (bool, error) {
    logJSON, err := ctx.GetStub().GetState(id)
    if err != nil {
        return false, fmt.Errorf("failed to read from world state: %v", err)
    }

    return logJSON != nil, nil
}

// GetAllLogs returns all logs found in world state
func (s *SmartContract) GetAllLogs(ctx contractapi.TransactionContextInterface) ([]*Log, error) {
    // range query with empty string for startKey and endKey does an
    // open-ended query of all logs in the chaincode namespace.
    resultsIterator, err := ctx.GetStub().GetStateByPartialCompositeKey("user~logID", []string{})
    if err != nil {
        return nil, err
    }
    defer resultsIterator.Close()

    var logs []*Log
    for resultsIterator.HasNext() {
        queryResponse, err := resultsIterator.Next()
        if err != nil {
            return nil, err
        }

        _, keyParts, err := ctx.GetStub().SplitCompositeKey(queryResponse.Key)
        if err != nil {
            return nil, err
        }

        var log Log
        err = json.Unmarshal(queryResponse.Value, &log)
        if err != nil {
            return nil, err
        }

        if len(keyParts) > 1 {
            log.ID = keyParts[1] // Secondo elemento della composite key è logID
        }

        logs = append(logs, &log)
    }

    return logs, nil
}

// GetLogForUser returns all logs found for a specified user
func (s *SmartContract) GetLogForUser(ctx contractapi.TransactionContextInterface, user string) ([]*Log, error) {

    /*Query definition
      queryString := fmt.Sprintf(`{"selector":{"user":"%s"}}`, user)

      resultsIterator, err := ctx.GetStub().GetQueryResult(queryString)
      if err != nil {
      	return nil, err
      }
      defer resultsIterator.Close()
    */

    //Query levelDB
    resultsIterator, err := ctx.GetStub().GetStateByPartialCompositeKey("user~logID", []string{user})
    if err != nil {
        return nil, fmt.Errorf("failed to get logs for user %s: %v", user, err)
    }
    defer resultsIterator.Close()

    var logs []*Log
    for resultsIterator.HasNext() {
        queryResponse, err := resultsIterator.Next()
        if err != nil {
            return nil, err
        }

        var log Log
        err = json.Unmarshal(queryResponse.Value, &log)
        if err != nil {
            return nil, err
        }
        logs = append(logs, &log)
    }
    if len(logs) == 0 {
        return nil, fmt.Errorf("no logs found for user %s", user)
    }

    return logs, nil
}

// CalculateActionRisk returns risk for a specified action
func (s *SmartContract) CalculateActionRisk(logsForUser []*Log, action string) (float64, error) {
    totalAttemptsSensitive, failedAttemptsSensitive := 0, 0
    totalAttemptsNonSensitive, failedAttemptsNonSensitive := 0, 0

    for _, log := range logsForUser {
        if log.Action == action {
            if log.Sensitivity { // Sensitive
                totalAttemptsSensitive++
                if !log.Status {
                    failedAttemptsSensitive++
                }
            } else { // Non Sensitive
                totalAttemptsNonSensitive++
                if !log.Status {
                    failedAttemptsNonSensitive++
                }
            }
        }
    }

    //Handles the case when there are no attemps for specified action
    if totalAttemptsSensitive == 0 && totalAttemptsNonSensitive == 0 {
        return 0.0, nil
    }

    C_sensitive, I_sensitive, A_sensitive, err1 := GetImpactScores(action, true)
    C_nonsensitive, I_nonsensitive, A_nonsensitive, err2 := GetImpactScores(action, false)

    if err1 != nil || err2 != nil {
        return 0, fmt.Errorf("error finding impact scores for action '%s'", action)
    }

    P_sensitive, P_nonSensitive := 0.0, 0.0

    // Compute probability
    if totalAttemptsSensitive > 0 {
        P_sensitive = float64(failedAttemptsSensitive) / float64(totalAttemptsSensitive)
    }
    if totalAttemptsNonSensitive > 0 {
        P_nonSensitive = float64(failedAttemptsNonSensitive) / float64(totalAttemptsNonSensitive)
    }

    // Calcolo del rischio per dati sensibili
    riskSensitive := (float64(C_sensitive) * P_sensitive) +
        (float64(I_sensitive) * P_sensitive) +
        (float64(A_sensitive) * P_sensitive)

    // Calcolo del rischio per dati non sensibili
    riskNonSensitive := (float64(C_nonsensitive) * P_nonSensitive) +
        (float64(I_nonsensitive) * P_nonSensitive) +
        (float64(A_nonsensitive) * P_nonSensitive)

    // Evitiamo divisione per zero nei pesi
    W1, W2 := WeightSensitive, WeightNonSensitive
    if totalAttemptsSensitive == 0 {
        W1 = 0
    }
    if totalAttemptsNonSensitive == 0 {
        W2 = 0
    }
    if W1+W2 == 0 {
        return 0, fmt.Errorf("nessun tentativo valido per questa azione")
    }

    // Calcolo del rischio totale pesato
    totalRisk := (W1*riskSensitive + W2*riskNonSensitive) / (W1 + W2)

    return totalRisk, nil
}

// GetImpactScores returns confidentiality, integrity and availability values
func GetImpactScores(action string, sensitivity bool) (int, int, int, error) {
    // Checks if action exists
    if actionImpacts, ok := impactTable[action]; ok {
        // Checks if sensibility for related action exists
        if scores, ok := actionImpacts[sensitivity]; ok {
            return scores[0], scores[1], scores[2], nil
        }
        return 0, 0, 0, fmt.Errorf("sensitivity '%t' not found for action '%s'", sensitivity, action)
    }
    return 0, 0, 0, fmt.Errorf("action '%s' not found", action)
}
