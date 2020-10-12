const { OPCUAClient, ClientSubscription, ClientMonitoredItem, AttributeIds, DataType } = require('node-opcua')


const clients = []

exports.connectOPCUA = async () => {
    const opcuaData = globalThis.opcuaData

    if (!opcuaData && !opcuaData.serverIP && !opcuaData.nodeData) return

    const url = `opc.tcp://${opcuaData.serverIP}`
    const client = OPCUAClient.create(null)
    await client.connect(url)
    clients.push(client)

    const session = await client.createSession(null)
    const subscription = await ClientSubscription.create(session, {
        requestedPublishingInterval: 500,
        publishingEnabled: true,
        priority: 10
    })


}

exports.disconnectOPCUA = () => {

}
