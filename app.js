//Dependencies
const express = require('express');
const logsController = require(`${__dirname}/controllers/logsController`);
//Configurations
const app = express();
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
