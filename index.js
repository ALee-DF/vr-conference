require('dotenv').config()
const createApp = require('./create-app')

const app = createApp()
const server = require('http').Server(app)
const io = require('socket.io')(server)

server.listen(process.env.PORT, () => {
  console.log('Listening on Port', process.env.PORT)
})

const avatarsList = []
const idCorrelate = {}
io.on('connection', function (socket) {
  socket.on('user joined', function (userdata) {
    avatarsList.push(userdata)
    idCorrelate[socket.id] = userdata.avatarID
  })
})
