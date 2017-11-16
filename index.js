require('dotenv').config()
const createApp = require('./create-app')

const app = createApp()
const server = require('http').Server(app)
const io = require('socket.io')(server)

server.listen(process.env.PORT, () => {
  console.log('Listening on Port', process.env.PORT)
})
