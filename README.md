# COBRA-Z
## Collaborative Blockchain Risk Assessment for Zero Trust Architecture

This repo includes the standard Hyperledger Fabric blockchain code with updated logic to serve the purpose of collaborative risk assessment.
Hyperledger Caliper tool for benchmarks are also included.

To run benchmarks it's needed to start the the Hyperledger Fabric Blockchain first
### Setup the network
Move to the `/fabric-samples/test-network` folder and execute the following command

`./network.sh up createChannel`

This will create the main channel. After that we need to deploy the custom chaincode with the command

`./network.sh deployCC -ccn basic -ccp ../log-management-basic/chaincode-go/ -ccl go`

### Start the benchmarks
Move to the `/caliper-benchmarks` folder

Start the benchmark running the command
`npx caliper launch manager --caliper-workspace ./ --caliper-networkconfig networks/fabric/test-network.yaml --caliper-benchconfig benchmarks/tirocinio/configCreateLog.yaml --caliper-fabric-gateway-enabled`

You can change the parameters of the benchmark by editing the `configCreateLog.yaml` in the `/caliper-benchmarks/benchmarks/tirocinio` folder
