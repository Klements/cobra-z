'use strict';

const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

class CreateAssetWorkload extends WorkloadModuleBase {
    constructor() {
        super();
    }

    async initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext) {
        await super.initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext);

        // Assign parameters from roundArguments or default values
        this.OID = roundArguments.OID || `Org1`; // Unique OID per worker
        this.recordCount = roundArguments.recordCount || 1; // Number of records per asset
    }

    async submitTransaction() {
        // Create an array of records matching the chaincode format
        const records = [];
        for (let i = 0; i < this.recordCount; i++) {
            const actionTypes = ['Create']; // Possible actions
            const sensitivityTypes = ['YES']; // Possible sensitivity values
            const statusTypes = ['YES']; // Possible status values

            // Construct individual record matching the chaincode's expected "Record" structure
            records.push({
                id: `User1`, // Matches the 'id' field in your chaincode
                timestamp: new Date().toISOString().replace('T', ' ').split('.')[0], // Format timestamp as 'YYYY-MM-DD HH:mm:ss'
                action: actionTypes[Math.floor(Math.random() * actionTypes.length)], // Random action
                sensitivity: sensitivityTypes[Math.floor(Math.random() * sensitivityTypes.length)], // Random sensitivity
                status: statusTypes[Math.floor(Math.random() * statusTypes.length)], // Random status
            });
        }

        // Serialize the records array to a JSON string
        const recordsString = JSON.stringify(records);

        // Prepare arguments for the CreateAsset function
        const myArgs = {
            contractId: this.roundArguments.contractId || 'basic', // Default contractId
            contractFunction: 'CreateAsset', // Name of the chaincode function
            invokerIdentity: 'User1', // Identity for transaction
            contractArguments: [this.OID, recordsString], // Arguments for the chaincode function
            readOnly: false, // This is a write operation
        };

        // Invoke the chaincode function and retry on MVCC_READ_CONFLICT
        try {
            console.log(`Submitting transaction with OID: ${this.OID}`);
            await this.sutAdapter.sendRequests(myArgs);
        } catch (error) {
            console.log("Transaction failed due to MVCC conflict, retrying...");
            await this.sutAdapter.sendRequests(myArgs); // Retry logic in case of MVCC conflict
        }
    }
}

function createWorkloadModule() {
    return new CreateAssetWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule;

