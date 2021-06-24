//Dependencies
const express = require('express');
const cors = require("cors");

//Configuration
const app = express();
const logsController = require('./controllers/logsController');

app.use(cors());
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.send(`Welcome to the captain's log`)
});

app.use('/logs', logsController)

app.get('*', (req, res) => {
    res.status(404).send('Page not found.')
});

module.exports = app;