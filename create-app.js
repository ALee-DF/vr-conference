const express = require('express')
const path = require('path')
const querystring = require('querystring')
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/conference/images/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
})
const upload = multer({ storage: storage })

module.exports = function createApp() {
  const app = express()
  app.use(express.static(path.join(__dirname, 'public')))

  app.post('/signin', upload.single('user-image'), (req, res) => {
  })
  return app
}
