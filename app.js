const logController = require('./controllers/logsController');
const express = require('express');

const app = express();

app.use('/logs', logController);

app.get('/', (request, response) => {
    // console.log('GET request to route - "/"')
    response.send("My Log ⚓📋");
});

module.exports = app;