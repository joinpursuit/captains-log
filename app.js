const express = require('express')
const app = express()
const logsController = require('./controllers/logs.controller')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send("welcome to the captain's log")
})

app.use((req, res, next) => {
  console.log('This code runs for every request', req.method, req.url)
  next()
})

app.use('/logs', logsController)

app.use('*', (req, res) => {
  res.status(404).send('Oops! Nothing to see here.')
})

module.exports = app
