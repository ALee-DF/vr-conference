const express = require('express')
const path = require('path')
const querystring = require('querystring')
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

module.exports = function createApp() {
  const app = express()
  app.use(express.static(path.join(__dirname, 'public')))

  app.post('/signin', upload.single('user-image'), (req, res) => {
    const imageObject = {
      'user-image': req.file.filename
    }
    const queryString = '/?' + querystring.stringify(req.body) + '&' +
      querystring.stringify(imageObject)
    res.redirect('/conference' + queryString)
  })
  return app
}
