const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const router = require('./router/router')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

function run () {
  app.use('/', router)
  app.listen(process.env.PORT, () => {
    console.log(`server is listining at ${process.env.PORT}`)
  })
}

run()
