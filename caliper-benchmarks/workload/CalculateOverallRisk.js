'use strict';

const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

class MyWorkload extends WorkloadModuleBase {
    constructor() {
        super();
    }

    async initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext) {
        await super.initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext);
    }

    async submitTransaction() {
      // Dynamically fetch userId, startDate, and endDate from roundArguments
      //  const oid = this.roundArguments.OID || 'Org1';
      // const user = this.roundArguments.userId || 'RGB1235'; // Default to 'm@Org1.com' if no userId provided
        const userid = 'User1'
    //    const startDate = this.roundArguments.startDate || '2009-01-01'; // Default start date
      //  const endDate = this.roundArguments.endDate || '2009-12-12'; // Default end date

        // Prepare the arguments for the chaincode function CalculateOverallRisk
        const myArgs = {
            contractId: this.roundArguments.contractId,   // contractId from roundArguments
            contractFunction: 'CalculateOverallRisk',
            invokerIdentity: userid, // Pass the userId as the invoker
            contractArguments: ['OrgB','BRB0944','01-01-2010 00:00:00', '1-03-2010 23:23:23'],  // Pass userId, startDate, endDate as the arguments
            readOnly: false
        };

        // Invoke the chaincode function with the generated arguments
        return await this.sutAdapter.sendRequests(myArgs);
    }
}

function createWorkloadModule() {
    return new MyWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule;


/*'use strict';

const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

class MyWorkload extends WorkloadModuleBase {
    constructor() {
        super();
    }

    async initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext) {
    await super.initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext);

    // Loop to create new assets using workerIndex-based IDs
    
}


    async submitTransaction() {
    // Define the userId, startDate, and endDate for the risk calculation
    const Id = 'm@Org1.com'
    const userId = 'User1'; // Adjust as needed (or retrieve dynamically)
    const startDate = '2024-10-01'; // You can adjust the date range as required
    const endDate = '2024-10-17';

    // Prepare the arguments for the chaincode function CalculateOverallRisk
    const myArgs = {
        contractId: this.roundArguments.contractId,
        contractFunction: 'CalculateOverallRisk',
        invokerIdentity: userId, // Pass in the userId as the invoker
        contractArguments: [m@Org1.com, startDate, endDate],  // Pass userId, startDate, endDate as the arguments
        readOnly: true
    };

    // Invoke the chaincode function with the generated arguments
    return await this.sutAdapter.sendRequests(myArgs);
}



   
}

function createWorkloadModule() {
    return new MyWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule; */

