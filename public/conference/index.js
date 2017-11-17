/* global AFRAME */
/* global renderAvatar */
/* global socket */
let avatarID
AFRAME.registerComponent('spawn-point', {
  init: function () {
    const params = new URLSearchParams(window.location.search)
    const username = params.get('username')
    const userImage = params.get('user-image')
    avatarID = params.get('id')
    socket.emit('user joined', { username, userImage, avatarID })
    const $spawnPoint = document.querySelector('#spawn-point')
    $spawnPoint.appendChild(renderAvatar(username, userImage, avatarID))
  }
})

AFRAME.registerComponent('avatar-position', {
  tick: function () {
    const $avatar = document.querySelector('#' + avatarID)
    const avatarPosition = this.el.getAttribute('position')
    const avatarRotation = this.el.getAttribute('rotation')
    socket.emit('avatar position', { avatarPosition, avatarRotation, avatarID })
    $avatar.setAttribute('position', avatarPosition.x + ' ' + avatarPosition.y + ' ' + avatarPosition.z)
    $avatar.setAttribute('rotation', avatarRotation.x + ' ' + avatarRotation.y + ' ' + avatarRotation.z)
  }
})
