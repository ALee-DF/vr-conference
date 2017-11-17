/* global renderAvatar */
/* global io */
const socket = io.connect('http://localhost:3000')
socket.on('new user', function ({ username, userImage, avatarID }) {
  const $spawnPoint = document.querySelector('#spawn-point')
  $spawnPoint.appendChild(renderAvatar(username, userImage, avatarID))
})
