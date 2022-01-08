//Dependencies
const express = require('express');
const logsController = require(`${__dirname}/controllers/logsController`);

//Configurations
const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON

app.use((req, res, next) => {
  console.log('This code runs for every request');
  next();
});

// Routes
app.use('/logs', logsController);

app.get('/', (req, res) => {
  res.send('Welcome to the Captains Log');
});

app.get('*', (req, res) => {
  res.json({
    status: 'fail',
    error: 'Page Not Found',
  });
});

module.exports = app;
