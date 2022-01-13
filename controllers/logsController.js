// Dependencies
const { response } = require('express');
const express = require('express');

// A new controller that handles a sub-route.
const logs = express.Router();

// Files
const logsArray = require('../models/log');

// Routes
// Sends the logs array:
logs.get('/', (request, response) => {
    // console.log('GET request to/logs');
    response.json(logsArray);
});

// SHOW
// Sends a redirect when an individual index is given:
logs.get('/:arrayIndex', (request, response) => {
    const arrayIndex = request.params;
    if (logsArray[arrayIndex]) {
        response.json(logsArray[arrayIndex]);
    } else {
        response.redirect('/404');
    }
});


module.exports = logs;