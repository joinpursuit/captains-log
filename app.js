const express = require('express');

const app = express();

const logsController = require('./controllers/logs.controller.js');

app.use(express.json());

app.get('/', (req, res) => {
  res.send("✨Welcome  To The Captain's Log✨");
});

app.use('/logs', logsController);

app.get('*', (req, res) => {
  res.status(404).send('Oops! Seems like You are Lost!');
});



module.exports = app;
