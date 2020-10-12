const SocketIO = require('socket.io')

module.exports = (server) => {
    const io = SocketIO(server, '/31779760')
    globalThis.io = io


    io.on('connection', (socket) => {
        console.log('connect! - ', socket)
    })
}
