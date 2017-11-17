/* global renderAvatar */
/* global io */
const socket = io.connect('http://localhost:3000')
socket.on('new user', function ({ username, userImage, avatarID }) {
  const $spawnPoint = document.querySelector('#spawn-point')
  $spawnPoint.appendChild(renderAvatar(username, userImage, avatarID))
})

socket.on('update avatar position and rotation', function ({ avatarPosition, avatarRotation, avatarID }) {
  const $avatar = document.querySelector('#' + avatarID)
  if ($avatar) {
    $avatar.setAttribute('position', avatarPosition.x + ' ' + avatarPosition.y + ' ' + avatarPosition.z)
    $avatar.setAttribute('rotation', avatarRotation.x + ' ' + avatarRotation.y + ' ' + avatarRotation.z)
  }
})
