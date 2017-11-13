/* eslint-disable no-unused-vars */
const renderAvatar = (username, imageUrl) => {
  const $avatar = document.createElement('a-entity')
  $avatar.setAttribute('id', 'avatar')
  $avatar.setAttribute('geometry', 'width: 3; height: 3; depth: 0.1')
  $avatar.setAttribute('material', 'color: red')

  const $avatarImage = document.createElement('a-entity')
  $avatarImage.setAttribute('position', '0 0.25 -0.06')
  $avatarImage.setAttribute('rotation', '0 180 0')
  $avatarImage.setAttribute('geometry', 'primitive: plane; width: 3; height: 2.5')
  $avatarImage.setAttribute('material', 'src: ' + imageUrl)

  const $avatarUsername = document.createElement('a-entity')
  $avatarUsername.setAttribute('position', '0 -1.25 -0.06')
  $avatarUsername.setAttribute('rotation', '0 180 0')
  $avatarUsername.setAttribute('geometry', 'primitive: plane; width: 3; height: 0.5')
  $avatarUsername.setAttribute('material', 'color: yellow')

  const $username = document.createElement('a-text')
  $username.setAttribute('align', 'center')
  $username.setAttribute('value', username)
  $username.setAttribute('color', 'black')

  $avatarUsername.appendChild($username)
  $avatar.appendChild($avatarImage)
  $avatar.appendChild($avatarUsername)

  return $avatar
}
