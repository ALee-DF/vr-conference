/* global AFRAME */
/* global renderAvatar */
AFRAME.registerComponent('spawn-point', {
  init: function () {
    const params = new URLSearchParams(window.location.search)
    const $spawnPoint = document.querySelector('#spawn-point')
    $spawnPoint.appendChild(renderAvatar(params.get('username'), params.get('user-image')))
  }
})

AFRAME.registerComponent('avatar-position', {
  tick: function () {
    const $avatar = document.querySelector('#avatar')
    const avatarPosition = this.el.getAttribute('position')
    const avatarRotation = this.el.getAttribute('rotation')
    $avatar.setAttribute('position', avatarPosition.x + ' ' + avatarPosition.y + ' ' + avatarPosition.z)
    $avatar.setAttribute('rotation', avatarRotation.x + ' ' + avatarRotation.y + ' ' + avatarRotation.z)
  }
})
