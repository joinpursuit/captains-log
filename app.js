// Dependencies
const express = require('express')

// Create the Express App: 
const app = express();

// Home Route:
app.get('/', (request, response) => {
    response.send('Welcome to captain\'s log');
});

// Export our app for 'server.js'
module.exports = app;
