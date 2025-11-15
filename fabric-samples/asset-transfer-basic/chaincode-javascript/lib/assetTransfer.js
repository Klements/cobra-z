
/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict';
// Deterministic JSON.stringify()
const stringify  = require('json-stringify-deterministic');
const sortKeysRecursive  = require('sort-keys-recursive');
const { Contract } = require('fabric-contract-api');
class AssetTransfer extends Contract {
    async InitLedger(ctx) {
        const assets = [
    {
        OID: 'Org1',
        records: [
            {
                userId:'m@Org1.com',
                Timestamp: '2024-10-01 13:13:41',
                Action: 'read',
                Sensitivity: 'yes',
                Status: 'yes',
            },
            {
                userId:'m@Org1.com',
                Timestamp: '2024-10-02 13:13:42',
                Action: 'read',
                Sensitivity: 'yes',
                Status: 'no',
            },
            
            {
                userId:'m@Org1.com',
                Timestamp: '2024-10-02 13:13:43',
                Action: 'read',
                Sensitivity: 'yes',
                Status: 'no',
            },
            
            
            {
                userId:'m@Org1.com',
                Timestamp: '2024-10-03 13:13:51',
                Action: 'read',
                Sensitivity: 'no',
                Status: 'No',
            },
            {
                userId:'m@Org1.com',
                Timestamp: '2024-10-04 14:14:15',
                Action: 'read',
                Sensitivity: 'no',
                Status: 'no',
            },


            {
                userId:'m@Org1.com',
                Timestamp: '2024-10-01 13:13:42',
                Action: 'delete',
                Sensitivity: 'yes',
                Status: 'yes',
            },
            
            {
                userId:'m@Org1.com',
                Timestamp: '2024-10-03 13:13:52',
                Action: 'delete',
                Sensitivity: 'no',
                Status: 'No',
            },
            {
                userId:'m@Org1.com',
                Timestamp: '2024-10-04 14:14:13',
                Action: 'Delete',
                Sensitivity: 'no',
                Status: 'no',
            },


            {
                userId:'m@Org1.com',
                Timestamp: '2024-10-01 13:13:43',
                Action: 'Modify',
                Sensitivity: 'yes',
                Status: 'yes',
            },
            
            {
                userId:'m@Org1.com',
                Timestamp: '2024-10-03 13:13:53',
                Action: 'Modify',
                Sensitivity: 'no',
                Status: 'No',
            },
            {
                userId:'m@Org1.com',
                Timestamp: '2024-10-04 14:14:13',
                Action: 'Modify',
                Sensitivity: 'no',
                Status: 'no',
            },





            {
                userId:'m@Org1.com',
                Timestamp: '2024-10-01 13:13:45',
                Action: 'Create',
                Sensitivity: 'yes',
                Status: 'yes',
            },
            
            {
                userId:'m@Org1.com',
                Timestamp: '2024-10-03 13:13:55',
                Action: 'Create',
                Sensitivity: 'no',
                Status: 'No',
            },
            {
                userId:'m@Org1.com',
                Timestamp: '2024-10-04 14:14:15',
                Action: 'Create',
                Sensitivity: 'no',
                Status: 'no',
            },






            {
                userId:'m@Org1.com',
                Timestamp: '2024-10-01 13:13:44',
                Action: 'Login',
                Sensitivity: 'yes',
                Status: 'yes',
            },
            
            {
                userId:'m@Org1.com',
                Timestamp: '2024-10-03 13:13:54',
                Action: 'Login',
                Sensitivity: 'no',
                Status: 'No',
            },
            {
                userId:'m@Org1.com',
                Timestamp: '2024-10-04 14:14:14',
                Action: 'Login',
                Sensitivity: 'no',
                Status: 'no',
            },



        ]
    },
    {
        OID: 'Org2',
        records: [
            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-02 00:00:07',
                Action: 'Read',
                Sensitivity: 'yes',
                Status: 'yes',
            },
            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-01 00:00:08',
                Action: 'read',
                Sensitivity: 'no',
                Status: 'no',
            },
            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-14 00:00:05',
                Action: 'read',
                Sensitivity: 'no',
                Status: 'yes',
            },
            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-03 00:00:06',
                Action: 'Read',
                Sensitivity: 'yes',
                Status: 'no',
            },
            


            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-02 00:00:08',
                Action: 'Delete',
                Sensitivity: 'yes',
                Status: 'yes',
            },
            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-01 00:00:09',
                Action: 'delete',
                Sensitivity: 'no',
                Status: 'no',
            },
            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-14 00:00:06',
                Action: 'delete',
                Sensitivity: 'no',
                Status: 'yes',
            },
            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-03 00:00:07',
                Action: 'Delete',
                Sensitivity: 'yes',
                Status: 'no',
            },






            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-02 00:00:09',
                Action: 'Modify',
                Sensitivity: 'yes',
                Status: 'yes',
            },
            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-01 00:00:10',
                Action: 'Modify',
                Sensitivity: 'no',
                Status: 'no',
            },
            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-14 00:00:07',
                Action: 'Modify',
                Sensitivity: 'no',
                Status: 'yes',
            },
            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-03 00:00:08',
                Action: 'Modify',
                Sensitivity: 'yes',
                Status: 'no',
            },

            




            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-02 00:00:11',
                Action: 'Create',
                Sensitivity: 'yes',
                Status: 'yes',
            },
            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-01 00:00:12',
                Action: 'Create',
                Sensitivity: 'no',
                Status: 'no',
            },
            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-14 00:00:09',
                Action: 'Create',
                Sensitivity: 'no',
                Status: 'yes',
            },
            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-03 00:00:10',
                Action: 'Create',
                Sensitivity: 'yes',
                Status: 'no',
            },







            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-02 00:00:10',
                Action: 'Login',
                Sensitivity: 'yes',
                Status: 'yes',
            },
            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-01 00:00:11',
                Action: 'Login',
                Sensitivity: 'no',
                Status: 'no',
            },
            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-14 00:00:08',
                Action: 'Login',
                Sensitivity: 'no',
                Status: 'yes',
            },
            {
                userId:'m@Org2.com',
                Timestamp: '2024-10-03 00:00:09',
                Action: 'Login',
                Sensitivity: 'yes',
                Status: 'no',
            },

            
        ]
    }
];
        for (const asset of assets) {
            asset.docType = 'Users';
            const uniqueKey = `${asset.OID}`;
            // example of how to Modify to world state deterministically
            // use convetion of alphabetic order
            // we insert data in alphabetic order using 'json-stringify-deterministic' and 'sort-keys-recursive'
            // when retrieving data, in any lang, the order of data will be the same and consequently also the corresonding hash
            await ctx.stub.putState(uniqueKey, Buffer.from(stringify(sortKeysRecursive(asset))));
        }
    }
    
    async CreateAsset(ctx, Oid, recordsString) {
        const assetBuffer = await ctx.stub.getState(Oid);
        let asset;
    
        // Check if the asset already exists in the ledger
        if (assetBuffer && assetBuffer.length > 0) {
            asset = JSON.parse(assetBuffer.toString());
        } else {
            // Create a new asset if it does not exist
            asset = {
                docType: 'Users',
                OID: Oid,
                records: [] // Initialize records array
            };
        }
    
        // Parse the records string into a JSON array
        let records;
        try {
            records = JSON.parse(recordsString);
        } catch (error) {
            throw new Error('Failed to parse records JSON string');
        }
    
        // Iterate through the provided records and add them to the asset
        for (const record of records) {
            const { id, timestamp, action, sensitivity, status } = record;
    
            const newRecord = {
                userId: id,
                Timestamp: timestamp,
                Action: action,
                Sensitivity: sensitivity,
                Status: status
            };
    
            // Add the new record to the records array
            asset.records.push(newRecord);
        }
    
        // Insert data in alphabetical order using 'json-stringify-deterministic' and 'sort-keys-recursive'
        await ctx.stub.putState(Oid, Buffer.from(stringify(sortKeysRecursive(asset))));
    
        //return JSON.stringify(asset); // Return the updated asset
    }
    
    
    
    // CreateAsset issues a new asset to the world state with given details.
   /* async CreateAsset(ctx,Oid, id, timestamp, action, sensitivity, status) {
       const uniqueKey = `${Oid}_${timestamp}`; // Create a unique key using the ID and Timestamp
       const assetBuffer = await ctx.stub.getState(Oid);
    const oid = Oid;
        let asset;
    if (assetBuffer && assetBuffer.length > 0) {
        asset = JSON.parse(assetBuffer.toString());
    } else {
        asset = {
            docType: 'Users',
            OID: Oid,
            records: [] // Initialize records array
        };
    }  
    
    
    
    //if(asset.OID=== Oid)
      //{
        const newRecord = {
        userId: id,
        Timestamp: timestamp,
        Action: action,
        Sensitivity: sensitivity,
        Status: status
    };
    asset.records.push(newRecord);
   // }
    

    // Insert data in alphabetical order using 'json-stringify-deterministic' and 'sort-keys-recursive'
    await ctx.stub.putState(Oid, Buffer.from(stringify(sortKeysRecursive(asset))));
    // Add the new record to the asset's records array
    //asset.records.push(newRecord);
        // we insert data in alphabetic order using 'json-stringify-deterministic' and 'sort-keys-recursive'
        //await ctx.stub.putState(uniqueKey, Buffer.from(stringify(sortKeysRecursive(asset))));
        return JSON.stringify(asset);
    } 


    */

// CountTotalUsers returns the total number of users (assets) in the ledger.
async CountTotalUsers(ctx) {
    let count = 0;
    const iterator = await ctx.stub.getStateByRange('', ''); // Get all assets from the ledger
    let result = await iterator.next();
    
    // Loop through the assets and count each entry
    while (!result.done) {
        count++; // Increment the count for each asset
        result = await iterator.next();
    }
    console.log('Total users in ledger: ${count}');
    return count; // Return the total count
    
}




///////////////////////////////////////////////////////////////////////////
//Calculation of User risk on Read Action
///////////////////////////////////////////////////////////////////////////

//dummycode

async CountUserLogsWithSensitiveAssetsRead(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'read', and sensitivity is 'yes'
                if (record.userId === userid && 
                    (record.Action == 'read'|| record.Action == 'Read') && 
                    (record.Sensitivity == 'yes' || record.Sensitivity == 'Yes')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}


//FOR NONSENSITIVE LOGS
async CountUserLogsWithNonSensitiveAssetsRead(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'read', and sensitivity is 'yes'
                if (record.userId === userid && 
                    (record.Action == 'read'|| record.Action == 'Read') && 
                    (record.Sensitivity == 'no' || record.Sensitivity == 'No')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}

//Function to count logs of Failed Attempts on Sensitive Assets with action read

async CountSensitivityYesStatusNoRead(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'read', and sensitivity is 'yes'
                if (record.userId === userid && (record.Action === 'read' || record.Action === 'Read') && (record.Sensitivity === 'yes' || record.Sensitivity === 'Yes') && (record.Status === 'No' || record.Status === 'no')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}




//Function to count logs of Failed Attempts on NonSensitive Assets with action read
async CountSensitivityNoStatusNoRead(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'read', and sensitivity is 'yes'
                if (record.userId === userid && (record.Action === 'read' || record.Action === 'Read') && (record.Sensitivity === 'no' || record.Sensitivity === 'No') && (record.Status === 'no' || record.Status === 'No')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}


// Function to calculate the probability of maliciousness of user's actions on sensitive resources
async CalculateMaliciousProbabilitySensitiveRead(ctx, OID, userid, startDate, endDate) {
    // Get the number of logs where Sensitivity is 'yes' and Status is 'no'
    const failedSensitiveLogs = await this.CountSensitivityYesStatusNoRead(ctx, OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const totalSensitiveLogs = await this.CountUserLogsWithSensitiveAssetsRead(ctx, OID, userid, startDate, endDate);
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (totalSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the probability is 0
    }
    
    // Calculate the probability
    const probabilityRead = failedSensitiveLogs / totalSensitiveLogs;
    
    return probabilityRead; // Return the calculated probability
}


// Function to calculate the probability of maliciousness of user's actions on nonsensitive resources
async CalculateMaliciousProbabilityNonSensitiveRead(ctx, OID, userid, startDate, endDate) {
    // get logs of total Failed Attempts on NonSensitive Assets with action read
    const failedNonSensitiveLogs = await this.CountSensitivityNoStatusNoRead(ctx, OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const totalNonSensitiveLogs = await this.CountUserLogsWithNonSensitiveAssetsRead(ctx, OID, userid, startDate, endDate);
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (totalNonSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the probability is 0
    }
    
    // Calculate the probability
    const probability = failedNonSensitiveLogs / totalNonSensitiveLogs;
    
    return probability; // Return the calculated probability
}

////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////



async CalculateRiskSensitiveRead(ctx, OID, userid, startDate, endDate) {
    
    
    // get logs of total Failed Attempts on NonSensitive Assets with action read
    const ProbfailedSensitiveLogs = await this.CalculateMaliciousProbabilitySensitiveRead(ctx, OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const Impact = 0.33;
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (ProbfailedSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the risk is 0
    }
    
    // Calculate the risk
    const Risk = Impact * ProbfailedSensitiveLogs;
    return Risk; // Return the calculated Risk
    
}





//calclating risk of Action "Read" on NonSensitive Assets 
async CalculateRiskNonSensitiveRead(ctx, OID, userid, startDate, endDate) {
    // get logs of total Failed Attempts on NonSensitive Assets with action read
    const ProbfailedNonSensitiveLogs = await this.CalculateMaliciousProbabilityNonSensitiveRead(ctx,OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const Impact = 0.33;
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (ProbfailedNonSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the risk is 0
    }
    
    // Calculate the risk
    const Risk = Impact * ProbfailedNonSensitiveLogs;
    
    return Risk; // Return the calculated Risk
}





async CalculateFinalRiskRead(ctx,OID, userid, startDate, endDate) {
    // get logs of total Failed Attempts on NonSensitive Assets with action read
    
    const RiskSensitiveRead = await this.CalculateRiskSensitiveRead(ctx,OID, userid, startDate, endDate);
    const RiskNonSensitiveRead = await this.CalculateRiskNonSensitiveRead(ctx,OID, userid, startDate, endDate);
    

    
    // Get the total number of logs with sensitive assets for the user
    const WeightSensitive = 0.7;
    const WeightNonSensitive = 0.3;
    
    
    // Calculate the risk
    const Risk = ((WeightSensitive * RiskSensitiveRead) + (WeightNonSensitive * RiskNonSensitiveRead))/ (WeightSensitive + WeightNonSensitive);
    
    return Risk; // Return the calculated Risk
}

//Function to count total logs on Sensitive assets with action read
//need to add for the read function
/* async CountUserLogsWithSensitiveAssetsRead(ctx,,OID userId, startDate, endDate) {
    const allResults = [];
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Convert input startDate and endDate into Date objects
    

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let record;
        try {
            record = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            record = strValue;
        }

        // Check if the asset matches the user ID, has sensitivity "yes", and is within the date range
        if (record.OID === OID && record.records.ID === userId &&
            (record.records.Action === 'read' || record.records.Action === 'Read') && 
            (record.records.Sensitivity === 'yes' || record.records.Sensitivity === 'Yes')) {

            // Convert the record's timestamp to a Date object
            const logTimestamp = new Date(record.records.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

            // Check if the log's timestamp falls within the given date range
            if (logTimestamp >= start && logTimestamp <= end) {
                count += 1; // Increment the count if the condition is met
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}*/
   
//Function to count total logs on NonSensitive assets with action read
   
   
/*async CountUserLogsWithNonSensitiveAssetsRead(ctx, userId, startDate, endDate) {
    const allResults = [];
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();

    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0; // To track the number of logs with status 'No'
    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let record;
        try {
            record = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            record = strValue;
        }
        // Check if the asset matches the user ID and has status 'No'
        if (record.ID === userId && (record.Action == 'read' || record.Action == 'Read')  && (record.Sensitivity === 'no' || record.Sensitivity === 'No')) {
            // Convert the record's timestamp to a Date object
            const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

            // Check if the log's timestamp falls within the given date range
            if (logTimestamp >= start && logTimestamp <= end) {
                count += 1; // Increment the count if the condition is met
            }
        }
        result = await iterator.next();
    }
    return count; // Return the count of logs
}

/*async CountUserLogsWithNonSensitiveAssetsRead(ctx, userId, startDate, endDate) {
    const allResults = [];
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();

    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0; // To track the number of logs with status 'No'

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let record;
        try {
            record = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            record = strValue; // If parsing fails, fallback to the raw string
        }

        // Check if the record has the required properties
        if (record.docType === "Users" && record.Actions) {
            for (let action of record.Actions) {
                // Check if the action matches the user ID, is of type 'Read', and has 'Sensitivity' as 'NO'
                if (action.ID === userId && 
                    (action.Action.toLowerCase() === 'read') && 
                    (action.Sensitivity.toLowerCase() === 'no')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(action.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }
        
        result = await iterator.next(); // Get the next result
    }
    
    return count; // Return the count of logs
}*/








/*//Function to count logs of Failed Attempts on Sensitive Assets with action read
async CountSensitivityYesStatusNoRead(ctx, userId, startDate, endDate) {
    const allResults = [];
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0; // To track the number of logs with status 'No'
    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let record;
        try {
            record = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            record = strValue;
        }
        // Check if the asset matches the user ID and with sensitivity "yes " and has status 'No'
        if (record.ID === userId && (record.Action == 'read' || record.Action == 'Read') && (record.Sensitivity === 'yes' || record.Sensitivity === 'Yes') && (record.Status === 'No' || record.Status === 'no')) {
            // Convert the record's timestamp to a Date object
            const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

            // Check if the log's timestamp falls within the given date range
            if (logTimestamp >= start && logTimestamp <= end) {
                count += 1; // Increment the count if the condition is met
            }
        }
        result = await iterator.next();
    }
    return count; // Return the count of logs
}*/


//Function to count logs of Failed Attempts on NonSensitive Assets with action read
/*async CountSensitivityNoStatusNoRead(ctx, userId, startDate, endDate) {
    const allResults = [];
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0; 
    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let record;
        try {
            record = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            record = strValue;
        }
        // Check if the asset matches the user ID and sensitivity "No" and has status 'No'
        if (record.ID === userId && (record.Action === 'read' || record.Action == 'Read') && (record.Sensitivity === 'no' || record.Sensitivity === 'No') && (record.Status === 'no' || record.Status === 'No')) {
            // Convert the record's timestamp to a Date object
        const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

        // Check if the log's timestamp falls within the given date range
        if (logTimestamp >= start && logTimestamp <= end) {
            count += 1; // Increment the count if the condition is met
        }
        }
        result = await iterator.next();
    }
    return count; // Return the count of logs
}*/





///////////////////////////////////////////////////////////////////////////
//Calculation of User risk on Delete Action
///////////////////////////////////////////////////////////////////////////

//dummycode

async CountUserLogsWithSensitiveAssetsDelete(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'Delete', and sensitivity is 'yes'
                if (record.userId === userid && 
                    (record.Action == 'delete'|| record.Action == 'Delete') && 
                    (record.Sensitivity == 'yes' || record.Sensitivity == 'Yes')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}


//FOR NONSENSITIVE LOGS
async CountUserLogsWithNonSensitiveAssetsDelete(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'Delete', and sensitivity is 'yes'
                if (record.userId === userid && 
                    (record.Action == 'delete'|| record.Action == 'Delete') && 
                    (record.Sensitivity == 'no' || record.Sensitivity == 'No')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}

//Function to count logs of Failed Attempts on Sensitive Assets with action Delete

async CountSensitivityYesStatusNoDelete(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'Delete', and sensitivity is 'yes'
                if (record.userId === userid && (record.Action === 'delete' || record.Action === 'Delete') && (record.Sensitivity === 'yes' || record.Sensitivity === 'Yes') && (record.Status === 'No' || record.Status === 'no')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}




//Function to count logs of Failed Attempts on NonSensitive Assets with action Delete
async CountSensitivityNoStatusNoDelete(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'Delete', and sensitivity is 'yes'
                if (record.userId === userid && (record.Action === 'delete' || record.Action === 'Delete') && (record.Sensitivity === 'no' || record.Sensitivity === 'No') && (record.Status === 'no' || record.Status === 'No')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}


// Function to calculate the probability of maliciousness of user's actions on sensitive resources
async CalculateMaliciousProbabilitySensitiveDelete(ctx, OID, userid, startDate, endDate) {
    // Get the number of logs where Sensitivity is 'yes' and Status is 'no'
    const failedSensitiveLogs = await this.CountSensitivityYesStatusNoDelete(ctx, OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const totalSensitiveLogs = await this.CountUserLogsWithSensitiveAssetsDelete(ctx, OID, userid, startDate, endDate);
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (totalSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the probability is 0
    }
    
    // Calculate the probability
    const probabilityDelete = failedSensitiveLogs / totalSensitiveLogs;
    
    return probabilityDelete; // Return the calculated probability
}


// Function to calculate the probability of maliciousness of user's actions on nonsensitive resources
async CalculateMaliciousProbabilityNonSensitiveDelete(ctx, OID, userid, startDate, endDate) {
    // get logs of total Failed Attempts on NonSensitive Assets with action read
    const failedNonSensitiveLogs = await this.CountSensitivityNoStatusNoDelete(ctx, OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const totalNonSensitiveLogs = await this.CountUserLogsWithNonSensitiveAssetsRead(ctx, OID, userid, startDate, endDate);
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (totalNonSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the probability is 0
    }
    
    // Calculate the probability
    const probability = failedNonSensitiveLogs / totalNonSensitiveLogs;
    
    return probability; // Return the calculated probability
}

////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////



async CalculateRiskSensitiveDelete(ctx, OID, userid, startDate, endDate) {
    
    
    // get logs of total Failed Attempts on NonSensitive Assets with action Delete
    const ProbfailedSensitiveLogs = await this.CalculateMaliciousProbabilitySensitiveDelete(ctx, OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const Impact = 0.33;
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (ProbfailedSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the risk is 0
    }
    
    // Calculate the risk
    const Risk = Impact * ProbfailedSensitiveLogs;
    return Risk; // Return the calculated Risk
    
}





//calclating risk of Action "Delete" on NonSensitive Assets 
async CalculateRiskNonSensitiveDelete(ctx, OID, userid, startDate, endDate) {
    // get logs of total Failed Attempts on NonSensitive Assets with action Delete
    const ProbfailedNonSensitiveLogs = await this.CalculateMaliciousProbabilityNonSensitiveDelete(ctx,OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const Impact = 0.33;
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (ProbfailedNonSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the risk is 0
    }
    
    // Calculate the risk
    const Risk = Impact * ProbfailedNonSensitiveLogs;
    
    return Risk; // Return the calculated Risk
}





async CalculateFinalRiskDelete(ctx,OID, userid, startDate, endDate) {
    // get logs of total Failed Attempts on NonSensitive Assets with action Delete
    
    const RiskSensitiveDelete = await this.CalculateRiskSensitiveDelete(ctx,OID, userid, startDate, endDate);
    const RiskNonSensitiveDelete = await this.CalculateRiskNonSensitiveDelete(ctx,OID, userid, startDate, endDate);
    

    
    // Get the total number of logs with sensitive assets for the user
    const WeightSensitive = 0.7;
    const WeightNonSensitive = 0.3;
    
    
    // Calculate the risk
    const Risk = ((WeightSensitive * RiskSensitiveDelete) + (WeightNonSensitive * RiskNonSensitiveDelete))/ (WeightSensitive + WeightNonSensitive);
    
    return Risk; // Return the calculated Risk
}





//Calculation of User risk on Modify Action
///////////////////////////////////////////////////////////////////////////

//dummycode

async CountUserLogsWithSensitiveAssetsModify(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'Modify', and sensitivity is 'yes'
                if (record.userId === userid && 
                    (record.Action == 'modify'|| record.Action == 'Modify') && 
                    (record.Sensitivity == 'yes' || record.Sensitivity == 'Yes')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}


//FOR NONSENSITIVE LOGS
async CountUserLogsWithNonSensitiveAssetsModify(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'Modify', and sensitivity is 'yes'
                if (record.userId === userid && 
                    (record.Action == 'modify'|| record.Action == 'Modify') && 
                    (record.Sensitivity == 'no' || record.Sensitivity == 'No')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}

//Function to count logs of Failed Attempts on Sensitive Assets with action Modify

async CountSensitivityYesStatusNoModify(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'Modify', and sensitivity is 'yes'
                if (record.userId === userid && (record.Action === 'modify' || record.Action === 'Modify') && (record.Sensitivity === 'yes' || record.Sensitivity === 'Yes') && (record.Status === 'No' || record.Status === 'no')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}




//Function to count logs of Failed Attempts on NonSensitive Assets with action Modify
async CountSensitivityNoStatusNoModify(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'Modify', and sensitivity is 'yes'
                if (record.userId === userid && (record.Action === 'modify' || record.Action === 'Modify') && (record.Sensitivity === 'no' || record.Sensitivity === 'No') && (record.Status === 'no' || record.Status === 'No')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}


// Function to calculate the probability of maliciousness of user's actions on sensitive resources
async CalculateMaliciousProbabilitySensitiveModify(ctx, OID, userid, startDate, endDate) {
    // Get the number of logs where Sensitivity is 'yes' and Status is 'no'
    const failedSensitiveLogs = await this.CountSensitivityYesStatusNoModify(ctx, OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const totalSensitiveLogs = await this.CountUserLogsWithSensitiveAssetsModify(ctx, OID, userid, startDate, endDate);
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (totalSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the probability is 0
    }
    
    // Calculate the probability
    const probabilityModify = failedSensitiveLogs / totalSensitiveLogs;
    
    return probabilityModify; // Return the calculated probability
}


// Function to calculate the probability of maliciousness of user's actions on nonsensitive resources
async CalculateMaliciousProbabilityNonSensitiveModify(ctx, OID, userid, startDate, endDate) {
    // get logs of total Failed Attempts on NonSensitive Assets with action Modify
    const failedNonSensitiveLogs = await this.CountSensitivityNoStatusNoModify(ctx, OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const totalNonSensitiveLogs = await this.CountUserLogsWithNonSensitiveAssetsModify(ctx, OID, userid, startDate, endDate);
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (totalNonSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the probability is 0
    }
    
    // Calculate the probability
    const probability = failedNonSensitiveLogs / totalNonSensitiveLogs;
    
    return probability; // Return the calculated probability
}

////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////



async CalculateRiskSensitiveModify(ctx, OID, userid, startDate, endDate) {
    
    
    // get logs of total Failed Attempts on NonSensitive Assets with action Modify
    const ProbfailedSensitiveLogs = await this.CalculateMaliciousProbabilitySensitiveModify(ctx, OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const Impact = 0.33;
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (ProbfailedSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the risk is 0
    }
    
    // Calculate the risk
    const Risk = Impact * ProbfailedSensitiveLogs;
    return Risk; // Return the calculated Risk
    
}





//calclating risk of Action "Modify" on NonSensitive Assets 
async CalculateRiskNonSensitiveModify(ctx, OID, userid, startDate, endDate) {
    // get logs of total Failed Attempts on NonSensitive Assets with action Modify
    const ProbfailedNonSensitiveLogs = await this.CalculateMaliciousProbabilityNonSensitiveModify(ctx,OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const Impact = 0.33;
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (ProbfailedNonSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the risk is 0
    }
    
    // Calculate the risk
    const Risk = Impact * ProbfailedNonSensitiveLogs;
    
    return Risk; // Return the calculated Risk
}





async CalculateFinalRiskModify(ctx, OID, userid, startDate, endDate) {
    // get logs of total Failed Attempts on NonSensitive Assets with action Modify
    
    const RiskSensitiveModify = await this.CalculateRiskSensitiveModify(ctx,OID, userid, startDate, endDate);
    const RiskNonSensitiveModify = await this.CalculateRiskNonSensitiveModify(ctx,OID, userid, startDate, endDate);
    

    
    // Get the total number of logs with sensitive assets for the user
    const WeightSensitive = 0.7;
    const WeightNonSensitive = 0.3;
    
    
    // Calculate the risk
    const Risk = ((WeightSensitive * RiskSensitiveModify) + (WeightNonSensitive * RiskNonSensitiveModify))/ (WeightSensitive + WeightNonSensitive);
    
    return Risk; // Return the calculated Risk
}














///////////////////////////////////////////////////////////////////////////
//Calculation of User risk on Create Action
///////////////////////////////////////////////////////////////////////////

//dummycode

async CountUserLogsWithSensitiveAssetsCreate(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'Create', and sensitivity is 'yes'
                if (record.userId === userid && 
                    (record.Action == 'create'|| record.Action == 'Create') && 
                    (record.Sensitivity == 'yes' || record.Sensitivity == 'Yes')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}


//FOR NONSENSITIVE LOGS
async CountUserLogsWithNonSensitiveAssetsCreate(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'Create', and sensitivity is 'yes'
                if (record.userId === userid && 
                    (record.Action == 'create'|| record.Action == 'Create') && 
                    (record.Sensitivity == 'no' || record.Sensitivity == 'No')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}

//Function to count logs of Failed Attempts on Sensitive Assets with action Create

async CountSensitivityYesStatusNoCreate(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'Create', and sensitivity is 'yes'
                if (record.userId === userid && (record.Action === 'create' || record.Action === 'Create') && (record.Sensitivity === 'yes' || record.Sensitivity === 'Yes') && (record.Status === 'No' || record.Status === 'no')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}




//Function to count logs of Failed Attempts on NonSensitive Assets with action Create
async CountSensitivityNoStatusNoCreate(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'Create', and sensitivity is 'yes'
                if (record.userId === userid && (record.Action === 'create' || record.Action === 'Create') && (record.Sensitivity === 'no' || record.Sensitivity === 'No') && (record.Status === 'no' || record.Status === 'No')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}


// Function to calculate the probability of maliciousness of user's actions on sensitive resources
async CalculateMaliciousProbabilitySensitiveCreate(ctx, OID, userid, startDate, endDate) {
    // Get the number of logs where Sensitivity is 'yes' and Status is 'no'
    const failedSensitiveLogs = await this.CountSensitivityYesStatusNoCreate(ctx, OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const totalSensitiveLogs = await this.CountUserLogsWithSensitiveAssetsCreate(ctx, OID, userid, startDate, endDate);
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (totalSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the probability is 0
    }
    
    // Calculate the probability
    const probabilityCreate = failedSensitiveLogs / totalSensitiveLogs;
    
    return probabilityCreate; // Return the calculated probability
}


// Function to calculate the probability of maliciousness of user's actions on nonsensitive resources
async CalculateMaliciousProbabilityNonSensitiveCreate(ctx, OID, userid, startDate, endDate) {
    // get logs of total Failed Attempts on NonSensitive Assets with action Create
    const failedNonSensitiveLogs = await this.CountSensitivityNoStatusNoCreate(ctx, OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const totalNonSensitiveLogs = await this.CountUserLogsWithNonSensitiveAssetsCreate(ctx, OID, userid, startDate, endDate);
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (totalNonSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the probability is 0
    }
    
    // Calculate the probability
    const probability = failedNonSensitiveLogs / totalNonSensitiveLogs;
    
    return probability; // Return the calculated probability
}

////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////



async CalculateRiskSensitiveCreate(ctx, OID, userid, startDate, endDate) {
    
    
    // get logs of total Failed Attempts on NonSensitive Assets with action Create
    const ProbfailedSensitiveLogs = await this.CalculateMaliciousProbabilitySensitiveCreate(ctx, OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const Impact = 0.33;
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (ProbfailedSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the risk is 0
    }
    
    // Calculate the risk
    const Risk = Impact * ProbfailedSensitiveLogs;
    return Risk; // Return the calculated Risk
    
}





//calclating risk of Action "Create" on NonSensitive Assets 
async CalculateRiskNonSensitiveCreate(ctx, OID, userid, startDate, endDate) {
    // get logs of total Failed Attempts on NonSensitive Assets with action Create
    const ProbfailedNonSensitiveLogs = await this.CalculateMaliciousProbabilityNonSensitiveCreate(ctx,OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const Impact = 0.33;
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (ProbfailedNonSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the risk is 0
    }
    
    // Calculate the risk
    const Risk = Impact * ProbfailedNonSensitiveLogs;
    
    return Risk; // Return the calculated Risk
}





async CalculateFinalRiskCreate(ctx,OID, userid, startDate, endDate) {
    // get logs of total Failed Attempts on NonSensitive Assets with action Create
    
    const RiskSensitiveCreate = await this.CalculateRiskSensitiveCreate(ctx,OID, userid, startDate, endDate);
    const RiskNonSensitiveCreate = await this.CalculateRiskNonSensitiveCreate(ctx,OID, userid, startDate, endDate);
    

    
    // Get the total number of logs with sensitive assets for the user
    const WeightSensitive = 0.7;
    const WeightNonSensitive = 0.3;
    
    
    // Calculate the risk
    const Risk = ((WeightSensitive * RiskSensitiveCreate) + (WeightNonSensitive * RiskNonSensitiveCreate))/ (WeightSensitive + WeightNonSensitive);
    
    return Risk; // Return the calculated Risk
}













//Calculating Risk of Login Action


async CountUserLogsWithSensitiveAssetsLogin(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'Login', and sensitivity is 'yes'
                if (record.userId === userid && 
                    (record.Action == 'login'|| record.Action == 'Login') && 
                    (record.Sensitivity == 'yes' || record.Sensitivity == 'Yes')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}


//FOR NONSENSITIVE LOGS
async CountUserLogsWithNonSensitiveAssetsLogin(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'Login', and sensitivity is 'yes'
                if (record.userId === userid && 
                    (record.Action == 'login'|| record.Action == 'Login') && 
                    (record.Sensitivity == 'no' || record.Sensitivity == 'No')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}

//Function to count logs of Failed Attempts on Sensitive Assets with action Login

async CountSensitivityYesStatusNoLogin(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'Login', and sensitivity is 'yes'
                if (record.userId === userid && (record.Action === 'login' || record.Action === 'Login') && (record.Sensitivity === 'yes' || record.Sensitivity === 'Yes') && (record.Status === 'No' || record.Status === 'no')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}




//Function to count logs of Failed Attempts on NonSensitive Assets with action Login
async CountSensitivityNoStatusNoLogin(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let asset;
        try {
            asset = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            result = await iterator.next();
            continue;
        }

        // Check if the asset matches the provided OID
        if (asset.OID === OID) {
            // Loop through each record in the asset's records array
            for (const record of asset.records) {
                // Check if the record matches the user ID, action is 'Login', and sensitivity is 'yes'
                if (record.userId === userid && (record.Action === 'login' || record.Action === 'Login') && (record.Sensitivity === 'no' || record.Sensitivity === 'No') && (record.Status === 'no' || record.Status === 'No')) {

                    // Convert the record's timestamp to a Date object
                    const logTimestamp = new Date(record.Timestamp);

                    // Check if the log's timestamp falls within the given date range
                    if (logTimestamp >= start && logTimestamp <= end) {
                        count += 1; // Increment the count if the condition is met
                    }
                }
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}


// Function to calculate the probability of maliciousness of user's actions on sensitive resources
async CalculateMaliciousProbabilitySensitiveLogin(ctx, OID, userid, startDate, endDate) {
    // Get the number of logs where Sensitivity is 'yes' and Status is 'no'
    const failedSensitiveLogs = await this.CountSensitivityYesStatusNoLogin(ctx, OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const totalSensitiveLogs = await this.CountUserLogsWithSensitiveAssetsLogin(ctx, OID, userid, startDate, endDate);
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (totalSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the probability is 0
    }
    
    // Calculate the probability
    const probabilityLogin = failedSensitiveLogs / totalSensitiveLogs;
    
    return probabilityLogin; // Return the calculated probability
}


// Function to calculate the probability of maliciousness of user's actions on nonsensitive resources
async CalculateMaliciousProbabilityNonSensitiveLogin(ctx, OID, userid, startDate, endDate) {
    // get logs of total Failed Attempts on NonSensitive Assets with action Login
    const failedNonSensitiveLogs = await this.CountSensitivityNoStatusNoLogin(ctx, OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const totalNonSensitiveLogs = await this.CountUserLogsWithNonSensitiveAssetsLogin(ctx, OID, userid, startDate, endDate);
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (totalNonSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the probability is 0
    }
    
    // Calculate the probability
    const probability = failedNonSensitiveLogs / totalNonSensitiveLogs;
    
    return probability; // Return the calculated probability
}

////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////



async CalculateRiskSensitiveLogin(ctx, OID, userid, startDate, endDate) {
    
    
    // get logs of total Failed Attempts on NonSensitive Assets with action Login
    const ProbfailedSensitiveLogs = await this.CalculateMaliciousProbabilitySensitiveLogin(ctx, OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const Impact = 0.33;
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (ProbfailedSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the risk is 0
    }
    
    // Calculate the risk
    const Risk = Impact * ProbfailedSensitiveLogs;
    return Risk; // Return the calculated Risk
    
}





//calclating risk of Action "Login" on NonSensitive Assets 
async CalculateRiskNonSensitiveLogin(ctx, OID, userid, startDate, endDate) {
    // get logs of total Failed Attempts on NonSensitive Assets with action Login
    const ProbfailedNonSensitiveLogs = await this.CalculateMaliciousProbabilityNonSensitiveLogin(ctx,OID, userid, startDate, endDate);
    
    // Get the total number of logs with sensitive assets for the user
    const Impact = 0.33;
    
    // Check if totalSensitiveLogs is 0 to avoid division by zero
    if (ProbfailedNonSensitiveLogs === 0) {
        return 0; // If there are no sensitive logs, the risk is 0
    }
    
    // Calculate the risk
    const Risk = Impact * ProbfailedNonSensitiveLogs;
    
    return Risk; // Return the calculated Risk
}





async CalculateFinalRiskLogin(ctx,OID, userid, startDate, endDate) {
    // get logs of total Failed Attempts on NonSensitive Assets with action Login
    
    const RiskSensitiveLogin = await this.CalculateRiskSensitiveLogin(ctx,OID, userid, startDate, endDate);
    const RiskNonSensitiveLogin = await this.CalculateRiskNonSensitiveLogin(ctx,OID, userid, startDate, endDate);
    

    
    // Get the total number of logs with sensitive assets for the user
    const WeightSensitive = 0.7;
    const WeightNonSensitive = 0.3;
    
    
    // Calculate the risk
    const Risk = ((WeightSensitive * RiskSensitiveLogin) + (WeightNonSensitive * RiskNonSensitiveLogin))/ (WeightSensitive + WeightNonSensitive);
    
    return Risk; // Return the calculated Risk
}







///////////////////////////////////////////////////////////////////////////
//Calculation of User risk on Delete Action
///////////////////////////////////////////////////////////////////////////


//Function to count total logs on Sensitive assets with action Delete
//need to add for the read function
/*async CountUserLogsWithSensitiveAssetsDelete(ctx, userId, startDate, endDate) {
    const allResults = [];
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();


    // Convert input startDate and endDate into Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);

    let count = 0; // To track the number of logs 

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let record;
        try {
            record = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            record = strValue;
        }

        // Check if the asset matches the user ID and has sensitivity 'Yes'
        if (record.ID === userId && (record.Action == 'delete' || record.Action == 'Delete')  && (record.Sensitivity === 'yes' || record.Sensitivity === 'Yes')) {
            // Convert the record's timestamp to a Date object
            const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

            // Check if the log's timestamp falls within the given date range
            if (logTimestamp >= start && logTimestamp <= end) {
                count += 1; // Increment the count if the condition is met
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}



//Function to count total logs on NonSensitive assets with action read


async CountUserLogsWithNonSensitiveAssetsDelete(ctx, userId, startDate, endDate) {
const allResults = [];
const iterator = await ctx.stub.getStateByRange('', '');
let result = await iterator.next();

const start = new Date(startDate);
const end = new Date(endDate);


let count = 0; // To track the number of logs with Sensitivity "No"

// Loop through all assets
while (!result.done) {
    const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
    let record;
    try {
        record = JSON.parse(strValue);
    } catch (err) {
        console.log(err);
        record = strValue;
    }

    // Check if the asset matches the user ID and has Sensitivity 'No'
    if (record.ID === userId && (record.Action == 'delete' || record.Action == 'Delete')  && (record.Sensitivity === 'no' || record.Sensitivity === 'No')) {
        // Convert the record's timestamp to a Date object
        const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

        // Check if the log's timestamp falls within the given date range
        if (logTimestamp >= start && logTimestamp <= end) {
            count += 1; // Increment the count if the condition is met
        }
    }

    result = await iterator.next();
}

return count; // Return the count of logs
}








//Function to count logs of Failed Attempts on Sensitive Assets with action delete
async CountSensitivityYesStatusNoDelete(ctx, userId, startDate, endDate) {
const allResults = [];
const iterator = await ctx.stub.getStateByRange('', '');
let result = await iterator.next();

const start = new Date(startDate);
const end = new Date(endDate);


let count = 0; // To track the number of logs with status 'No'

// Loop through all assets
while (!result.done) {
    const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
    let record;
    try {
        record = JSON.parse(strValue);
    } catch (err) {
        console.log(err);
        record = strValue;
    }

    // Check if the asset matches the user ID and has status 'No'
    if (record.ID === userId && (record.Action == 'delete' || record.Action == 'Delete') && (record.Sensitivity === 'yes' || record.Sensitivity === 'Yes') && (record.Status === 'No' || record.Status === 'no')) {
        // Convert the record's timestamp to a Date object
        const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

        // Check if the log's timestamp falls within the given date range
        if (logTimestamp >= start && logTimestamp <= end) {
            count += 1; // Increment the count if the condition is met
        }
    }

    result = await iterator.next();
}

return count; // Return the count of logs
}



//Function to count logs of Failed Attempts on NonSensitive Assets with action delete

async CountSensitivityNoStatusNoDelete(ctx, userId, startDate, endDate) {
    const allResults = [];
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    
    
    const start = new Date(startDate);
    const end = new Date(endDate);


    let count = 0; // To track the number of logs with status 'No'

    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let record;
        try {
            record = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            record = strValue;
        }

        // Check if the asset matches the user ID and has sensitivity and status 'No'
        if (record.ID === userId && (record.Action == 'delete' || record.Action == 'Delete') && (record.Sensitivity === 'no' || record.Sensitivity === 'No') && (record.Status === 'no' || record.Status === 'No')) {
            // Convert the record's timestamp to a Date object
            const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

            // Check if the log's timestamp falls within the given date range
            if (logTimestamp >= start && logTimestamp <= end) {
                count += 1; // Increment the count if the condition is met
            }
        }

        result = await iterator.next();
    }

    return count; // Return the count of logs
}







// Function to calculate the probability of maliciousness of user's actions on sensitive resources
async CalculateMaliciousProbabilitySensitiveDelete(ctx, userId, startDate, endDate) {
// Get the number of logs where Sensitivity is 'yes' and Status is 'no'
const failedSensitiveLogs = await this.CountSensitivityYesStatusNoDelete(ctx, userId, startDate, endDate);

// Get the total number of logs with sensitive assets for the user
const totalSensitiveLogs = await this.CountUserLogsWithSensitiveAssetsDelete(ctx, userId, startDate, endDate);

// Check if totalSensitiveLogs is 0 to avoid division by zero
if (totalSensitiveLogs === 0) {
    return 0; // If there are no sensitive logs, the probability is 0
}

// Calculate the probability
const probabilityDelete = failedSensitiveLogs / totalSensitiveLogs;

return probabilityDelete; // Return the calculated probability
}



// Function to calculate the probability of maliciousness of user's actions on nonsensitive resources
async CalculateMaliciousProbabilityNonSensitiveDelete(ctx, userId, startDate, endDate) {

// get logs of total Failed Attempts on NonSensitive Assets with action read
const failedNonSensitiveLogs = await this.CountSensitivityNoStatusNoDelete(ctx, userId, startDate, endDate);

// Get the total number of logs with non sensitive assets for the user
const totalNonSensitiveLogs = await this.CountUserLogsWithNonSensitiveAssetsDelete(ctx, userId, startDate, endDate);

// Check if totalSensitiveLogs is 0 to avoid division by zero
if (totalNonSensitiveLogs === 0) {
    return 0; // If there are no sensitive logs, the probability is 0
}

// Calculate the probability
const probability = failedNonSensitiveLogs / totalNonSensitiveLogs;

return probability; // Return the calculated probability
}


////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////




async CalculateRiskSensitiveDelete(ctx, userId, startDate, endDate) {

// get logs of total Failed Attempts on NonSensitive Assets with action delete
const ProbfailedSensitiveLogs = await this.CalculateMaliciousProbabilitySensitiveDelete(ctx, userId, startDate, endDate);

// Get the total number of logs with sensitive assets for the user
const Impact = 0.33;

// Check if totalSensitiveLogs is 0 to avoid division by zero
if (ProbfailedSensitiveLogs === 0) {
    return 0; // If there are no sensitive logs, the risk is 0
}

// Calculate the risk
const Risk = (Impact * ProbfailedSensitiveLogs) + (Impact * ProbfailedSensitiveLogs);
console.log(`Total Risk with action "Delete" on Sensitive Resources score for user: ${Risk}`);
return Risk; // Return the calculated Risk
}






//calclating risk of Action "Delete" on NonSensitive Assets 

async CalculateRiskNonSensitiveDelete(ctx, userId, startDate, endDate) {
// get logs of total Failed Attempts on NonSensitive Assets with action delete
const ProbfailedNonSensitiveLogs = await this.CalculateMaliciousProbabilityNonSensitiveDelete(ctx, userId, startDate, endDate);

const Impact = 0.33;

// Check if total failed nonSensitiveLogs are 0 to avoid division by zero
if (ProbfailedNonSensitiveLogs === 0) {
    return 0; // If there are no sensitive logs, the risk is 0
}

// Calculate the risk
const Risk = (Impact * ProbfailedNonSensitiveLogs) + (Impact * ProbfailedNonSensitiveLogs);

return Risk; // Return the calculated Risk
}






async CalculateFinalRiskDelete(ctx, userId, startDate, endDate) {
// get logs of total Failed Attempts on NonSensitive Assets with action Delete


const RiskSensitiveDelete = await this.CalculateRiskSensitiveDelete(ctx, userId, startDate, endDate);
const RiskNonSensitiveDelete = await this.CalculateRiskNonSensitiveDelete(ctx, userId, startDate, endDate);

// Get the total number of logs with sensitive assets for the user
const WeightSensitive = 0.7;
const WeightNonSensitive = 0.3;

// Calculate the risk
const Risk = ((WeightSensitive * RiskSensitiveDelete) + (WeightNonSensitive * RiskNonSensitiveDelete))/ (WeightSensitive + WeightNonSensitive);

return Risk; // Return the calculated Risk
}*/


///////////////////////////////////////////
//////////////////////////////////////////
//Calculating Risk of User Against the Action "Modify"
///////////////////////////////////////////


//Function to count total logs on Sensitive assets with action "Modify"
/*async CountUserLogsWithSensitiveAssetsModify(ctx, userId, startDate, endDate) {
    const allResults = [];
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();

    const start = new Date(startDate);
    const end = new Date(endDate);

    let count = 0; // To track the number of logs with status 'No'
    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let record;
        try {
            record = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            record = strValue;
        }
        // Check if the asset matches the user ID and has status 'No'
        if (record.ID === userId && (record.Action == 'modify' || record.Action == 'Modify')  && (record.Sensitivity === 'yes' || record.Sensitivity === 'Yes')) {
            // Convert the record's timestamp to a Date object
            const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

            // Check if the log's timestamp falls within the given date range
            if (logTimestamp >= start && logTimestamp <= end) {
                count += 1; // Increment the count if the condition is met
            }
        }
        result = await iterator.next();
    }
    return count; // Return the count of logs
}

//Function to count total logs on NonSensitive assets with action Modify


async CountUserLogsWithNonSensitiveAssetsModify(ctx, userId, startDate, endDate) {
const allResults = [];
const iterator = await ctx.stub.getStateByRange('', '');
let result = await iterator.next();


const start = new Date(startDate);
const end = new Date(endDate);

let count = 0; // To track the number of logs with status 'No'
// Loop through all assets
while (!result.done) {
    const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
    let record;
    try {
        record = JSON.parse(strValue);
    } catch (err) {
        console.log(err);
        record = strValue;
    }
    // Check if the asset matches the user ID and has status 'No'
    if (record.ID === userId && (record.Action == 'modify' || record.Action == 'Modify')  && (record.Sensitivity === 'no' || record.Sensitivity === 'No')) {
        // Convert the record's timestamp to a Date object
        const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

        // Check if the log's timestamp falls within the given date range
        if (logTimestamp >= start && logTimestamp <= end) {
            count += 1; // Increment the count if the condition is met
        }
    }
    result = await iterator.next();
}
return count; // Return the count of logs
}



//Function to count logs of Failed Attempts on Sensitive Assets with action Modify
async CountSensitivityYesStatusNoModify(ctx, userId, startDate, endDate) {
const allResults = [];
const iterator = await ctx.stub.getStateByRange('', '');
let result = await iterator.next();


const start = new Date(startDate);
const end = new Date(endDate);


let count = 0; // To track the number of logs with status 'No'
// Loop through all assets
while (!result.done) {
    const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
    let record;
    try {
        record = JSON.parse(strValue);
    } catch (err) {
        console.log(err);
        record = strValue;
    }
    // Check if the asset matches the user ID and has status 'No'
    if (record.ID === userId && (record.Action == 'modify' || record.Action == 'Modify') && (record.Sensitivity === 'yes' || record.Sensitivity === 'Yes') && (record.Status === 'No' || record.Status === 'no')) {
        // Convert the record's timestamp to a Date object
        const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

        // Check if the log's timestamp falls within the given date range
        if (logTimestamp >= start && logTimestamp <= end) {
            count += 1; // Increment the count if the condition is met
        }
    }
    result = await iterator.next();
}
return count; // Return the count of logs
}


//Function to count logs of Failed Attempts on NonSensitive Assets with action Modify
async CountSensitivityNoStatusNoModify(ctx, userId, startDate, endDate) {
    const allResults = [];
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();

    const start = new Date(startDate);
    const end = new Date(endDate);


    let count = 0; // To track the number of logs with status 'No'
    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let record;
        try {
            record = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            record = strValue;
        }
        // Check if the asset matches the user ID and has status 'No'
        if (record.ID === userId && (record.Action == 'modify' || record.Action == 'Modify') && (record.Sensitivity === 'no' || record.Sensitivity === 'No') && (record.Status === 'no' || record.Status === 'No')) {
            // Convert the record's timestamp to a Date object
            const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

            // Check if the log's timestamp falls within the given date range
            if (logTimestamp >= start && logTimestamp <= end) {
                count += 1; // Increment the count if the condition is met
            }
        }
        result = await iterator.next();
    }
    return count; // Return the count of logs
}






// Function to calculate the probability of maliciousness of user's actions on sensitive resources
async CalculateMaliciousProbabilitySensitiveModify(ctx, userId, startDate, endDate) {
// Get the number of logs where Sensitivity is 'yes' and Status is 'no'
const failedSensitiveLogsModify = await this.CountSensitivityYesStatusNoModify(ctx, userId, startDate, endDate);

// Get the total number of logs with sensitive assets for the user
const totalSensitiveLogsModify = await this.CountUserLogsWithSensitiveAssetsModify(ctx, userId, startDate, endDate);

// Check if totalSensitiveLogs is 0 to avoid division by zero
if (totalSensitiveLogsModify === 0) {
    return 0; // If there are no sensitive logs, the probability is 0
}

// Calculate the probability
const probabilityModify = failedSensitiveLogsModify / totalSensitiveLogsModify;

return probabilityModify; // Return the calculated probability
}


// Function to calculate the probability of maliciousness of user's actions on nonsensitive resources
async CalculateMaliciousProbabilityNonSensitiveModify(ctx, userId, startDate, endDate) {
// get logs of total Failed Attempts on NonSensitive Assets with action Modify
const failedNonSensitiveLogsModify = await this.CountSensitivityNoStatusNoModify(ctx, userId, startDate, endDate);

// Get the total number of logs with non sensitive assets for the user
const totalNonSensitiveLogsModify = await this.CountUserLogsWithNonSensitiveAssetsModify(ctx, userId, startDate, endDate);

// Check if totalSensitiveLogs is 0 to avoid division by zero
if (totalNonSensitiveLogsModify === 0) {
    return 0; // If there are no sensitive logs, the probability is 0
}

// Calculate the probability
const probability = failedNonSensitiveLogsModify / totalNonSensitiveLogsModify;

return probability; // Return the calculated probability
}

////////////////////////////////////////////////////
//Calculating Risk for Action Modify on Sesitive Assets



async CalculateRiskSensitiveModify(ctx, userId, startDate, endDate) {
// get logs of total Failed Attempts on NonSensitive Assets with action Modify
const ProbfailedSensitiveLogsModify = await this.CalculateMaliciousProbabilitySensitiveModify(ctx, userId, startDate, endDate);

// Get the total number of logs with sensitive assets for the user
const Impact = 0.33;


// Calculate the risk
const Risk = (Impact * ProbfailedSensitiveLogsModify) + (Impact * ProbfailedSensitiveLogsModify);

return Risk; // Return the calculated Risk

}





//calclating risk of Action "Modify" on NonSensitive Assets 
async CalculateRiskNonSensitiveModify(ctx, userId, startDate, endDate) {
// get logs of total Failed Attempts on NonSensitive Assets with action Modify
const ProbfailedNonSensitiveLogsModify = await this.CalculateMaliciousProbabilityNonSensitiveModify(ctx, userId, startDate, endDate);

// Get the total number of logs with non sensitive assets for the user
const Impact = 0.33;


// Calculate the risk
const Risk = (Impact * ProbfailedNonSensitiveLogsModify) + (Impact * ProbfailedNonSensitiveLogsModify);

return Risk; // Return the calculated Risk
}





async CalculateFinalRiskModify(ctx, userId, startDate, endDate) {
// get logs of total Failed Attempts on NonSensitive Assets with action Modify

const RiskSensitiveModify = await this.CalculateRiskSensitiveModify(ctx, userId, startDate, endDate);
const RiskNonSensitiveModify = await this.CalculateRiskNonSensitiveModify(ctx, userId, startDate, endDate);



// Get the total number of logs with sensitive assets for the user
const WeightSensitive = 0.7;
const WeightNonSensitive = 0.3;


// Calculate the risk
const Risk = ((WeightSensitive * RiskSensitiveModify) + (WeightNonSensitive * RiskNonSensitiveModify))/ (WeightSensitive + WeightNonSensitive);

return Risk; // Return the calculated Risk
}

*/




///////////////////////////////////////////////////////////////////////////
//Calculation of User risk on Create Action
///////////////////////////////////////////////////////////////////////////




//Function to count total logs on Sensitive assets with action Create
//need to add for the Create function
/*
async CountUserLogsWithSensitiveAssetsCreate(ctx, userId, startDate, endDate) {
    const allResults = [];
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);

    let count = 0; // To track the number of logs with status 'No'
    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let record;
        try {
            record = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            record = strValue;
        }
        // Check if the asset matches the user ID and has status 'No'
        if (record.ID === userId && (record.Action == 'create' || record.Action == 'Create')  && (record.Sensitivity === 'yes' || record.Sensitivity === 'Yes')) {
            // Convert the record's timestamp to a Date object
            const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

            // Check if the log's timestamp falls within the given date range
            if (logTimestamp >= start && logTimestamp <= end) {
                count += 1; // Increment the count if the condition is met
            }
        }
        result = await iterator.next();
    }
    return count; // Return the count of logs
}

//Function to count total logs on NonSensitive assets with action Create


async CountUserLogsWithNonSensitiveAssetsCreate(ctx, userId, startDate, endDate) {
const allResults = [];
const iterator = await ctx.stub.getStateByRange('', '');
let result = await iterator.next();

const start = new Date(startDate);
const end = new Date(endDate);


let count = 0; // To track the number of logs with status 'No'
// Loop through all assets
while (!result.done) {
    const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
    let record;
    try {
        record = JSON.parse(strValue);
    } catch (err) {
        console.log(err);
        record = strValue;
    }
    // Check if the asset matches the user ID and has status 'No'
    if (record.ID === userId && (record.Action == 'create' || record.Action == 'Create')  && (record.Sensitivity === 'no' || record.Sensitivity === 'No')) {
        // Convert the record's timestamp to a Date object
        const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

        // Check if the log's timestamp falls within the given date range
        if (logTimestamp >= start && logTimestamp <= end) {
            count += 1; // Increment the count if the condition is met
        }
    }
    result = await iterator.next();
}
return count; // Return the count of logs
}



//Function to count logs of Failed Attempts on Sensitive Assets with action Create
async CountSensitivityYesStatusNoCreate(ctx, userId, startDate, endDate) {
const allResults = [];
const iterator = await ctx.stub.getStateByRange('', '');
let result = await iterator.next();
const start = new Date(startDate);
const end = new Date(endDate);

let count = 0; // To track the number of logs with status 'No'
// Loop through all assets
while (!result.done) {
    const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
    let record;
    try {
        record = JSON.parse(strValue);
    } catch (err) {
        console.log(err);
        record = strValue;
    }
    // Check if the asset matches the user ID and has status 'No'
    if (record.ID === userId && (record.Action == 'create' || record.Action == 'Create') && (record.Sensitivity === 'yes' || record.Sensitivity === 'Yes') && (record.Status === 'No' || record.Status === 'no')) {
        // Convert the record's timestamp to a Date object
        const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

        // Check if the log's timestamp falls within the given date range
        if (logTimestamp >= start && logTimestamp <= end) {
            count += 1; // Increment the count if the condition is met
        }
    }
    result = await iterator.next();
}
return count; // Return the count of logs
}


//Function to count logs of Failed Attempts on NonSensitive Assets with action Create
async CountSensitivityNoStatusNoCreate(ctx, userId, startDate, endDate) {
    const allResults = [];
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0; // To track the number of logs with status 'No'
    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let record;
        try {
            record = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            record = strValue;
        }
        // Check if the asset matches the user ID and has status 'No'
        if (record.ID === userId && (record.Action == 'create' || record.Action == 'Create') && (record.Sensitivity === 'no' || record.Sensitivity === 'No') && (record.Status === 'no' || record.Status === 'No')) {
            // Convert the record's timestamp to a Date object
            const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

            // Check if the log's timestamp falls within the given date range
            if (logTimestamp >= start && logTimestamp <= end) {
                count += 1; // Increment the count if the condition is met
            }
        }
        result = await iterator.next();
    }
    return count; // Return the count of logs
}



// Function to calculate the probability of maliciousness of user's actions on sensitive resources
async CalculateMaliciousProbabilitySensitiveCreate(ctx, userId, startDate, endDate) {
// Get the number of logs where Sensitivity is 'yes' and Status is 'no'
const failedSensitiveLogs = await this.CountSensitivityYesStatusNoCreate(ctx, userId, startDate, endDate);

// Get the total number of logs with sensitive assets for the user
const totalSensitiveLogs = await this.CountUserLogsWithSensitiveAssetsCreate(ctx, userId, startDate, endDate);

// Check if totalSensitiveLogs is 0 to avoid division by zero
if (totalSensitiveLogs === 0) {
    return 0; // If there are no sensitive logs, the probability is 0
}

// Calculate the probability
const probabilityCreate = failedSensitiveLogs / totalSensitiveLogs;

return probabilityCreate; // Return the calculated probability
}


// Function to calculate the probability of maliciousness of user's actions on nonsensitive resources
async CalculateMaliciousProbabilityNonSensitiveCreate(ctx, userId, startDate, endDate) {
// get logs of total Failed Attempts on NonSensitive Assets with action Create
const failedNonSensitiveLogs = await this.CountSensitivityNoStatusNoCreate(ctx, userId, startDate, endDate);

// Get the total number of logs with non sensitive assets for the user
const totalNonSensitiveLogs = await this.CountUserLogsWithNonSensitiveAssetsCreate(ctx, userId, startDate, endDate);

// Check if totalSensitiveLogs is 0 to avoid division by zero
if (totalNonSensitiveLogs === 0) {
    return 0; // If there are no non sensitive logs, the probability is 0
}

// Calculate the probability
const probability = failedNonSensitiveLogs / totalNonSensitiveLogs;

return probability; // Return the calculated probability
}

////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////



async CalculateRiskSensitiveCreate(ctx, userId, startDate, endDate) {
// get logs of total Failed Attempts on NonSensitive Assets with action Create
const ProbfailedSensitiveLogsCreate = await this.CalculateMaliciousProbabilitySensitiveCreate(ctx, userId, startDate, endDate);

// Get the total number of logs with sensitive assets for the user
const Impact = 0.33;



// Calculate the risk
const Risk = (Impact * ProbfailedSensitiveLogsCreate) + (Impact * ProbfailedSensitiveLogsCreate);

return Risk; // Return the calculated Risk

}





//calclating risk of Action "Create" on NonSensitive Assets 
async CalculateRiskNonSensitiveCreate(ctx, userId, startDate, endDate) {
// get logs of total Failed Attempts on NonSensitive Assets with action Create
const ProbfailedNonSensitiveLogs = await this.CalculateMaliciousProbabilityNonSensitiveCreate(ctx, userId, startDate, endDate);

// Get the total number of logs with sensitive assets for the user
const Impact = 0.33;



// Calculate the risk
const Risk = (Impact * ProbfailedNonSensitiveLogs) + (Impact * ProbfailedNonSensitiveLogs);

return Risk; // Return the calculated Risk
}




async CalculateFinalRiskCreate(ctx, userId, startDate, endDate) {
// get logs of total Failed Attempts on NonSensitive Assets with action Create

const RiskSensitiveCreate= await this.CalculateRiskSensitiveCreate(ctx, userId, startDate, endDate);
const RiskNonSensitiveCreate = await this.CalculateRiskNonSensitiveCreate(ctx, userId, startDate, endDate);



// Get the total number of logs with sensitive assets for the user
const WeightSensitive = 0.7;
const WeightNonSensitive = 0.3;


// Calculate the risk
const Risk = ((WeightSensitive * RiskSensitiveCreate) + (WeightNonSensitive * RiskNonSensitiveCreate))/ (WeightSensitive + WeightNonSensitive);

return Risk; // Return the calculated Risk
}*/



///////////////////////////////////////////////////////////////////////////
//Calculation of User risk on Login Action
///////////////////////////////////////////////////////////////////////////




//Function to count total logs on Sensitive assets with action Login

/*async CountUserLogsWithSensitiveAssetsLogin(ctx, userId, startDate, endDate) {
    const allResults = [];
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0; 
    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let record;
        try {
            record = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            record = strValue;
        }
        // Check if the asset matches the user ID and has sensitivity "yes"
        if (record.ID === userId && (record.Action == 'login' || record.Action == 'Login')  && (record.Sensitivity === 'yes' || record.Sensitivity === 'Yes')) {
            // Convert the record's timestamp to a Date object
            const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

            // Check if the log's timestamp falls within the given date range
            if (logTimestamp >= start && logTimestamp <= end) {
                count += 1; // Increment the count if the condition is met
            }
        }
        result = await iterator.next();
    }
    return count; // Return the count of logs
}

//Function to count total logs on NonSensitive assets with action Login


async CountUserLogsWithNonSensitiveAssetsLogin(ctx, userId, startDate, endDate) {
const allResults = [];
const iterator = await ctx.stub.getStateByRange('', '');
let result = await iterator.next();
const start = new Date(startDate);
const end = new Date(endDate);
let count = 0; // To track the number of logs with status 'No'
// Loop through all assets
while (!result.done) {
    const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
    let record;
    try {
        record = JSON.parse(strValue);
    } catch (err) {
        console.log(err);
        record = strValue;
    }
    // Check if the asset matches the user ID and has status 'No'
    if (record.ID === userId && (record.Action == 'login' || record.Action == 'Login')  && (record.Sensitivity === 'no' || record.Sensitivity === 'No')) {
        // Convert the record's timestamp to a Date object
        const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

        // Check if the log's timestamp falls within the given date range
        if (logTimestamp >= start && logTimestamp <= end) {
            count += 1; // Increment the count if the condition is met
        }
    }
    result = await iterator.next();
}
return count; // Return the count of logs
}







//Function to count logs of Failed Attempts on Sensitive Assets with action Login
async CountSensitivityYesStatusNoLogin(ctx, userId, startDate, endDate) {
const allResults = [];
const iterator = await ctx.stub.getStateByRange('', '');
let result = await iterator.next();
const start = new Date(startDate);
const end = new Date(endDate);
let count = 0; // To track the number of logs with status 'No'
// Loop through all assets
while (!result.done) {
    const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
    let record;
    try {
        record = JSON.parse(strValue);
    } catch (err) {
        console.log(err);
        record = strValue;
    }
    // Check if the asset matches the user ID and with sensitivity "yes " and has status 'No'
    if (record.ID === userId && (record.Action == 'login' || record.Action == 'Login') && (record.Sensitivity === 'yes' || record.Sensitivity === 'Yes') && (record.Status === 'No' || record.Status === 'no')) {
        // Convert the record's timestamp to a Date object
        const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

        // Check if the log's timestamp falls within the given date range
        if (logTimestamp >= start && logTimestamp <= end) {
            count += 1; // Increment the count if the condition is met
        }
    }
    result = await iterator.next();
}
return count; // Return the count of logs
}


//Function to count logs of Failed Attempts on NonSensitive Assets with action Login
async CountSensitivityNoStatusNoLogin(ctx, userId, startDate, endDate) {
    const allResults = [];
    const iterator = await ctx.stub.getStateByRange('', '');
    let result = await iterator.next();
    const start = new Date(startDate);
    const end = new Date(endDate);

    let count = 0; 
    // Loop through all assets
    while (!result.done) {
        const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
        let record;
        try {
            record = JSON.parse(strValue);
        } catch (err) {
            console.log(err);
            record = strValue;
        }
        // Check if the asset matches the user ID and sensitivity "No" and has status 'No'
        if (record.ID === userId && (record.Action == 'login' || record.Action == 'Login') && (record.Sensitivity === 'no' || record.Sensitivity === 'No') && (record.Status === 'no' || record.Status === 'No')) {
            // Convert the record's timestamp to a Date object
            const logTimestamp = new Date(record.Timestamp); // Assuming Timestamp is in 'YYYY-MM-DD HH:MM:SS' format

            // Check if the log's timestamp falls within the given date range
            if (logTimestamp >= start && logTimestamp <= end) {
                count += 1; // Increment the count if the condition is met
            }
        }
        result = await iterator.next();
    }
    return count; // Return the count of logs
}






// Function to calculate the probability of maliciousness of user's actions on sensitive resources
async CalculateMaliciousProbabilitySensitiveLogin(ctx, userId, startDate, endDate) {
// Get the number of logs where Sensitivity is 'yes' and Status is 'no'
const failedSensitiveLogs = await this.CountSensitivityYesStatusNoLogin(ctx, userId, startDate, endDate);

// Get the total number of logs with sensitive assets for the user
const totalSensitiveLogs = await this.CountUserLogsWithSensitiveAssetsLogin(ctx, userId, startDate, endDate);

// Check if totalSensitiveLogs is 0 to avoid division by zero
if (totalSensitiveLogs === 0) {
    return 0; // If there are no sensitive logs, the probability is 0
}

// Calculate the probability
const probabilityLogin = failedSensitiveLogs / totalSensitiveLogs;

return probabilityLogin; // Return the calculated probability
}


// Function to calculate the probability of maliciousness of user's actions on nonsensitive resources
async CalculateMaliciousProbabilityNonSensitiveLogin(ctx, userId, startDate, endDate) {
// get logs of total Failed Attempts on NonSensitive Assets with action Login
const failedNonSensitiveLogsLoginNS = await this.CountSensitivityNoStatusNoLogin(ctx, userId, startDate, endDate);

// Get the total number of logs with sensitive assets for the user
const totalNonSensitiveLogsLoginNS = await this.CountUserLogsWithNonSensitiveAssetsLogin(ctx, userId, startDate, endDate);

// Check if totalSensitiveLogs is 0 to avoid division by zero
if (totalNonSensitiveLogsLoginNS === 0) {
    return 0; // If there are no sensitive logs, the probability is 0
}

// Calculate the probability
const probabilityLoginNS = failedNonSensitiveLogsLoginNS / totalNonSensitiveLogsLoginNS;

return probabilityLoginNS; // Return the calculated probability
}

////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////



async CalculateRiskSensitiveLogin(ctx, userId, startDate, endDate) {
// get logs of total Failed Attempts on NonSensitive Assets with action Login
const ProbfailedSensitiveLogsLoginS = await this.CalculateMaliciousProbabilitySensitiveLogin(ctx, userId, startDate, endDate);

// Get the total number of logs with sensitive assets for the user
const Impact = 0.33;

// Check if totalSensitiveLogs is 0 to avoid division by zero
if (ProbfailedSensitiveLogsLoginS === 0) {
    return 0; // If there are no sensitive logs, the risk is 0
}

// Calculate the risk
const RiskLS = Impact * ProbfailedSensitiveLogsLoginS;
return RiskLS; // Return the calculated Risk

}





//calclating risk of Action "Login" on NonSensitive Assets 
async CalculateRiskNonSensitiveLogin(ctx, userId, startDate, endDate) {
// get logs of total Failed Attempts on NonSensitive Assets with action Login
const ProbfailedNonSensitiveLogsLogin = await this.CalculateMaliciousProbabilityNonSensitiveLogin(ctx, userId, startDate, endDate);

// Get the total number of logs with sensitive assets for the user
const Impact = 0.33;

// Check if totalSensitiveLogs is 0 to avoid division by zero
if (ProbfailedNonSensitiveLogsLogin === 0) {
    return 0; // If there are no sensitive logs, the risk is 0
}

// Calculate the risk
const RiskL = Impact * ProbfailedNonSensitiveLogsLogin;

return RiskL; // Return the calculated Risk
}





async CalculateFinalRiskLogin(ctx, userId, startDate, endDate) {
// get logs of total Failed Attempts on NonSensitive Assets with action Login

const RiskSensitiveLogin = await this.CalculateRiskSensitiveLogin(ctx, userId, startDate, endDate);
const RiskNonSensitiveLogin = await this.CalculateRiskNonSensitiveLogin(ctx, userId, startDate, endDate);



// Get the total number of logs with sensitive assets for the user
const WeightSensitive = 0.7;
const WeightNonSensitive = 0.3;


// Calculate the risk
const Risk = ((WeightSensitive * RiskSensitiveLogin) + (WeightNonSensitive * RiskNonSensitiveLogin))/ (WeightSensitive + WeightNonSensitive);

return Risk; // Return the calculated Risk
}

*/



////////////////////////////////////////////////


////////////////////////////////////////////////


////////////////////////////////////////////////





async CalculateOverallRisk(ctx, OID, userid, startDate, endDate) {
    // get logs of total Failed Attempts on NonSensitive Assets with action Create
    const startTime = Date.now();
    
    //const startTime = Date.now();
    
    
    const RiskRead= await this.CalculateFinalRiskRead(ctx, OID, userid, startDate, endDate);
    const RiskDelete = await this.CalculateFinalRiskDelete(ctx, OID, userid, startDate, endDate);
    const RiskModify = await this.CalculateFinalRiskModify(ctx, OID, userid, startDate, endDate);
    const RiskCreate = await this.CalculateFinalRiskCreate(ctx, OID, userid, startDate, endDate);
    const RiskLogin = await this.CalculateFinalRiskLogin(ctx, OID, userid, startDate, endDate);

    
    
    
    // Get the total number of logs with sensitive assets for the user
    
    const WeightDelete = 0.30;
    const WeightModify = 0.25;
    const WeightCreate = 0.20;
    const WeightRead = 0.15;
    const WeightLogin = 0.1;
    
    
    // Calculate the risk
    const Risk = ((WeightRead * RiskRead) +(WeightDelete * RiskDelete)+ (WeightModify * RiskModify)+  (WeightCreate * RiskCreate)+  (WeightLogin * RiskLogin))/ (WeightDelete +WeightModify + WeightCreate + WeightRead+ WeightLogin);
    
    
    //const endTime = Date.now();

    // Calculate the execution time
    //const executionTime = endTime - startTime;

    //const message = `Chaincode execution time: ${executionTime} ms`;
    
let riskLevel;
    if (Risk < 3) {
        riskLevel = 'Low'; // Low risk if Risk value is less than 3
    } else if (Risk >= 3 && Risk <= 5) {
        riskLevel = 'Medium'; // Medium risk if Risk value is between 3 and 5 (inclusive)
    } else {
        riskLevel = 'High'; // High risk if Risk value is greater than 5
    }

    // Return both the risk value and the risk level
    return {
        RiskValue: Risk,
        RiskLevel: riskLevel
    };
    const endTime = Date.now();
    const executionTime = endTime - startTime; // Time in milliseconds
	console.log(`Execution time for CalculateRiskSensitiveRead: ${executionTime} ms`);
     
     return {
        RiskValue: Risk,
        RiskLevel: riskLevel,
        ExecutionTime: executionTime, // Include execution time in the response
    };
    
    
    
    //return Risk; // Return the calculated Risk
    }














async DeleteAsset(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    const start = new Date(startDate), end = new Date(endDate);
    let result = await iterator.next(), count = 0;

    while (!result.done) {
        try {
            let asset = JSON.parse(Buffer.from(result.value.value.toString()).toString('utf8'));
            if (asset.OID === OID) {
                asset.records = asset.records.filter(record => {
                    const logTimestamp = new Date(record.Timestamp);
                    const withinRange = logTimestamp >= start && logTimestamp <= end;
                    if (record.userId === userid && withinRange) count++;
                    return !(record.userId === userid && withinRange);
                });

                asset.records.length ? 
                    await ctx.stub.putState(result.value.key, Buffer.from(JSON.stringify(asset))) :
                    await ctx.stub.deleteState(result.value.key);
            }
        } catch (err) { console.log(err); }
        result = await iterator.next();
    }

    await iterator.close();
    if (count === 0) throw new Error(`No matching records found for OID ${OID} and userId ${userid}`);
    return `${count} records deleted for userId ${userid} within the specified date range.`;
}




async ReadAsset(ctx, OID, userid, startDate, endDate) {
    const iterator = await ctx.stub.getStateByRange('', '');
    const start = new Date(startDate), end = new Date(endDate);
    let result = await iterator.next(), foundRecords = [];

    while (!result.done) {
        try {
            let asset = JSON.parse(Buffer.from(result.value.value.toString()).toString('utf8'));
            if (asset.OID === OID) {
                asset.records.forEach(record => {
                    const logTimestamp = new Date(record.Timestamp);
                    if (record.userId === userid && logTimestamp >= start && logTimestamp <= end) {
                        foundRecords.push(record);
                    }
                });
            }
        } catch (err) { console.log(err); }
        result = await iterator.next();
    }

    await iterator.close();
    if (foundRecords.length === 0) throw new Error(`No matching records found for OID ${OID} and userId ${userid}`);
    return JSON.stringify(foundRecords);
}

    
    
    // UpdateAsset updates an existing asset in the world state with provided parameters.
    async UpdateAsset(ctx, id, timestamp, action, sensitivity, status) {
        const exists = await this.AssetExists(ctx, id);
        if (!exists) {
            throw new Error(`The asset ${id} does not exist`);
        }
        // overwriting original asset with new asset
        const updatedAsset = {
            ID: id,
            Timestamp: timestamp,
            Action: action,
            Sensitivity: sensitivity,
            Status: status,
        };
        // we insert data in alphabetic order using 'json-stringify-deterministic' and 'sort-keys-recursive'
        return ctx.stub.putState(id, Buffer.from(stringify(sortKeysRecursive(updatedAsset))));
    }
   
    // GetAllAssets returns all assets found in the world state.
    async GetAllAssets(ctx) {
        const allResults = [];
        // range query with empty string for startKey and endKey does an open-ended query of all assets in the chaincode namespace.
        const iterator = await ctx.stub.getStateByRange('', '');
        let result = await iterator.next();
        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push(record);
            result = await iterator.next();
        }
        return JSON.stringify(allResults);
    }
}
module.exports = AssetTransfer;

