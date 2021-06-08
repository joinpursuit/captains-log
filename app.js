//Dependencies
const express = require('express');

//Configuration
const app = express();
const logs = require('./controllers/logsController');

//Routes
app.get('/', (req, res) => {
    res.send(`Welcome to the captain's log`)
});

app.use('/logs', logs)

app.get('*', (req, res) => {
    res.status(404).send('Page not found.')
});

module.exports = app;