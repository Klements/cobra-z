/*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

// Array di utenti per cui calcolare il risk assessment
const users = ['guest', 'admin', 'user1', 'testuser', 'postgres', 'whois', 'info', 'irc', 'djohnson', 'lbattisti', 'lcarbone', 'acelentano', 'gmorandi', 'gscotti', 'mrossi', 'lbianchi', 'bfumagalli', 'abaglio', 'gstorti', 'gporetti'];
/**
 * Workload module per il benchmark della funzione RiskAssessment.
 */
class RiskAssessmentWorkload extends WorkloadModuleBase {
    /**
     * Inizializza il modulo workload.
     */
    constructor() {
        super();
        this.txIndex = 0;
    }

    /**
     * Crea e invia transazioni per il round.
     * @return {Promise<TxStatus[]>}
     */
    async submitTransaction() {
        this.txIndex++;
        // Seleziona dinamicamente un utente dall'elenco
        const user = users[this.txIndex % users.length];

        // Crea i parametri per invocare la funzione RiskAssessment
        const args = {
            contractId: 'basic', // Nome del chaincode
            contractFunction: 'RiskAssessment', // Nome della funzione
            contractArguments: [user], // Argomento della funzione
            timeout: 3000, // Timeout esteso per evitare fallimenti
            readOnly: true // Specifica che questa è una query (non modifica lo stato)
        };

        // Invoca la funzione tramite il caliper adapter
        await this.sutAdapter.sendRequests(args);
    }
}

/**
 * Crea un'istanza del modulo workload.
 * @return {WorkloadModuleInterface}
 */
function createWorkloadModule() {
    return new RiskAssessmentWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule;
