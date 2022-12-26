const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
// const { client } = require('./db')
const router = require('./router/router')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use('/', router)

async function run () {
  console.log(`db initialized`)
  app.listen(process.env.PORT, () => {
    console.log(`server is listining at ${process.env.PORT}`)
  })
}

run()
