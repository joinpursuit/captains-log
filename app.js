// Files
const logsController = require('./controllers/logsController');

// Dependencies
const express = require('express');
const { application } = require('express');

// Create the Express App: Configuration
const app = express();

// JSON-parsing Middleware
app.use(express.json());

// Delegate to the logs Controller
app.use('/logs', logsController);

// Home Route:
app.get('/', (request, response) => {
    response.send('Welcome to captain\'s log');
});

// Star (*) matches anything we haven't matched yet.
app.get('*', (request, response) => {
    response.status(404).send('Page Not Found');
});

// Export our app for 'server.js'
module.exports = app;
