const express = require('express')
const logs = require('./controllers/logs')
const app = express()

app.use(express.json())

app.use((req, res, next) => {
next();
})

app.use('/logs', logs)

app.get('/', (req, res) => {
    res.send('welcome to the captains log')
})

app.get('*', (req, res) => {
    res.status(404).send('Page Not Found')
})

module.exports = app; 