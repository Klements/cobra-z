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

// Parametri per generare dati dinamici
//const servers = ['server1', 'server2', 'server3', 'server4', 'server5', 'mailsv1', 'mailsv2', 'printer1', 'printer2', 'db1', 'db2'];
//const server = servers[Math.floor(Math.random() * servers.length)];
const users = ['guest', 'admin', 'user1', 'testuser', 'postgres', 'whois', 'info', 'irc', 'djohnson', 'lbattisti', 'lcarbone', 'acelentano', 'gmorandi', 'gscotti', 'mrossi', 'lbianchi', 'bfumagalli', 'abaglio', 'gstorti', 'gporetti'];
const actions = ['create', 'view', 'update', 'delete', 'login'];
//const basePort = 8000;

/**
 * Workload module per testare la funzione CreateLog
 */
class CreateLogWorkload extends WorkloadModuleBase {
    /**
     * Inizializza il modulo workload.
     */
    constructor() {
        super();
        this.txIndex = 0; // Contatore delle transazioni
    }

    /**
     * Costruisce e invia transazioni per il round.
     * @return {Promise<void>}
     */
    async submitTransaction() {
        this.txIndex++;

        // Genera dati dinamici per il log
        const logID = `log_${this.txIndex}_${this.workerIndex}`;
        const timestamp = new Date().toISOString();
        const userID = users[this.txIndex % users.length];
        const action = actions[this.txIndex % actions.length];
        const sensitivity = Math.random() < 0.5;
        const status = Math.random() < 0.5;

        // Crea i parametri per invocare CreateLog
        const args = {
            contractId: 'basic', // Nome del chaincode
            contractVersion: 'v1', // Versione del chaincode (se necessaria)
            contractFunction: 'CreateLog', // Nome della funzione da testare
            contractArguments: [logID, timestamp, userID, action, sensitivity.toString(), status.toString()], // Parametri della funzione
            timeout: 30 // Timeout per la transazione
        };

        // Invia la richiesta al chaincode
        await this.sutAdapter.sendRequests(args);
    }
}

/**
 * Crea un'istanza del modulo workload.
 * @return {WorkloadModuleInterface}
 */
function createWorkloadModule() {
    return new CreateLogWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule;

