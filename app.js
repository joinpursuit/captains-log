const express = require('express');
const app = express()

app.get("/", (req, res) => {
    res.send('welcome to the captain\'s log')
})

const index = require('./controllers/index');
app.use('/logs', index)

app.get("*", (req, res) => {
    res.status(404).send('RRRRRRRR, Page not found')
})

module.exports = app;