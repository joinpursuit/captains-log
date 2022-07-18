const express = require('express');
const app = express();

//IMPORT CONTROLLER
const logsController = require('./controllers/logsController.js');

//PARSE JSON BODY
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Welcome to the Captain's log");
});

app.use('/logs', logsController);

app.use('*', (req, res) => {
  res.status(404).send('Oop 404 Error! Wrong URL! Page not found!');
});

module.exports = app;
