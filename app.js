//DEPENDENCIES
const { json } = require('express')
const express = require('express')
const app = express()
const logsController = require('./controllers/logsController')

//CONFIG
app.use(json())
app.use('/logs', logsController)
//routes

app.get('/', (req, res) => {
  res.send(`<h1>Welcome to the captian's log</h1>`)
})

app.get('*', (req, res) => {
  res.status(404).send('Captain is off duty')
})

//export
module.exports = app
