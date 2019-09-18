const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./config/config')

const app = express()
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

mongoose.Promise = global.Promise
mongoose.connect(`${config.db.url}`, {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(async () => {
  app.listen(config.port, () =>
    console.log(`Server started on port ${config.port}`)
  )
}).catch(err => console.log(err))
