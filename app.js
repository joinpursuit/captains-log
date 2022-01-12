// DEPENDENCIES 
const express = require('express');
// Creates the Express app.
const app = express();
// Files
const logsArray = require('./models/log.js');

app.use(express.json());


app.get('/', (request, response) => {
    console.log('Getting route: /');
    response.send(`welcome to the captain's log`);
});

app.get('/logs', (request, response) => {
    console.log('Getting route: /logs');
    response.send(logsArray);
});

app.get('/logs/:index', (request, response) => {
    console.log('Getting route: /logs/:index');
    if (logsArray[request.params.index]) {
    response.send(logsArray[request.params.index]);
    } else {
        response.redirect(404).json({ error: 'Resource not found' });
    }
});

app.post('/logs', (request, response) => {
    logsArray.push(request.body);
    response.status(201).json(logsArray);
});

app.delete('/logs/:index', (request, response) => {
    if (logsArray[request.params.index]) {
    response.send(logsArray.splice(logsArray.length - 1))
    };
})

module.exports = app;