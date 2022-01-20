const express = require('express');
const app = express();
const logArray = require('./models/log');
const logController = require('./controllers/logController')
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json(logArray);
    res.send("Welcome to the captain's log");
})

app.use('/logs', logController);

app.get('/logs', (req, res) => {
    res.send(logArray);
})

app.get('*', (req, res) => {
    res.status(404).json({ error: "Not found."})
})

module.exports = app;