const createApp = require('./create-app')
require('dotenv').config()

const app = createApp()
app.listen(process.env.PORT, () => {
  console.log('Listening on Port', process.env.PORT)
})
