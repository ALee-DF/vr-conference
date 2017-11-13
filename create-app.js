const express = require('express')
const path = require('path')
const querystring = require('querystring')
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const datauri = require('datauri')
const dUri = new datauri()
const cloudinary = require('cloudinary')
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

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
