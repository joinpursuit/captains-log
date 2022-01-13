const express = require('express');
const app = express();
const logsController = require('./controllers/logsController.js');

app.use(express.json());

app.get('/', (request, response) => {
    response.send("welcome to the captain's log");
})

app.use('/logs', logsController);

app.get('*', (request, response) => {
    response.status(404).json({ error: "Page not found" });
});

module.exports = app;