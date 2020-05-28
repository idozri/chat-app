// const path = require('path')
// const http = require('http')
// const express = require('express')
// const socketio = require('socket.io')

// const app = express()
// const server = http.createServer(app)
// const io = socketio(server)

// const publicDirectoryPath = path.join(__dirname, '../public')

// app.use(express.static(publicDirectoryPath))

// io.on('connection', (socket) => {
//     console.log('New socket connaction')

//     socket.emit('message', 'Welcome!')
//     // socket.emit('countUpdated', count)

//     // socket.on('increment', () => {
//     //     count++
//     //     io.emit('countUpdated', count)
//     // })
// })



module.exports = {
    server,
    app
}

