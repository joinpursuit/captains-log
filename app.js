const teamCaptains = require('./controllers/logsController');
const express = require('express');

const app = express();

app.use('/teamCaptains', teamCaptains);

app.get('/', (request, response) => {
    // console.log('GET request to route - "/"')
    response.send("My Log ⚓📋")
})

module.exports = app;