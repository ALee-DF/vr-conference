/* global renderAvatar */
/* global io */
const socket = io.connect('/')
socket.on('new user', ({ username, userImage, avatarID }) => {
  const $spawnPoint = document.querySelector('#spawn-point')
  $spawnPoint.appendChild(renderAvatar(username, userImage, avatarID))
})

socket.on('update avatar position and rotation', ({ avatarPosition, avatarRotation, avatarID }) => {
  const $avatar = document.querySelector('#' + avatarID)
  if ($avatar) {
    $avatar.setAttribute('position', avatarPosition.x + ' ' + avatarPosition.y + ' ' + avatarPosition.z)
    $avatar.setAttribute('rotation', avatarRotation.x + ' ' + avatarRotation.y + ' ' + avatarRotation.z)
  }
})

socket.on('delete avatar', avatarID => {
  const $avatar = document.querySelector('#' + avatarID)
  $avatar.parentNode.removeChild($avatar)
})
