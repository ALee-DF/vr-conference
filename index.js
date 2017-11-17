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
    socket.broadcast.emit('new user', userdata)
    socket.emit('load other avatars', avatarsList)
    avatarsList.push(userdata)
    idCorrelate[socket.id] = userdata.avatarID
  })

  socket.on('avatar position', function ({ avatarPosition, avatarRotation, avatarID }) {
    socket.broadcast.emit('update avatar position and rotation', { avatarPosition, avatarRotation, avatarID })
  })

  socket.on('disconnect', function () {
    socket.broadcast.emit('delete avatar', idCorrelate[socket.id])
    const deleteIndex = avatarsList.findIndex(userdata => {
      return userdata.avatarID === idCorrelate[socket.id]
    })
    avatarsList.splice(deleteIndex, 1)
    delete idCorrelate[socket.id]
  })
})
