const logController = require('./controllers/logsController');
const express = require('express');

const app = express();

app.use(express.json());

app.use('/logs', logController);

app.get('/', (request, response) => {
    // console.log('GET request to route - "/"')
    response.send("My Log ⚓📋");
});

app.get('*', (request, response) => {
    response.status(404).json({ ERROR: 'Page not found'});
});

module.exports = app;