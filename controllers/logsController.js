const express = require('express');
const logs = require('../models/log.js');
const logsController = express.Router();

//INDEX (Get a list (or index) of all logs)
logsController.get('/', (req, res) => {
  res.json(logs);
});

//CREATE (Adding new log to the end of the array)
logsController.post('/', (req, res) => {
  logs.push(req.body);
  res.json(logs[logs.length - 1]);
});

//SHOW ONE LOG (Get an individual view)
logsController.get('/:arrayIndex', (req, res) => {
  const { arrayIndex } = req.params;
  if (logs[arrayIndex]) {
    res.status(200).json(logs[arrayIndex]);
  } else {
    res.status(404).redirect('/error');
  }
});

//PUT (Replace the index in the logs array)
logsController.put('/:arrayIndex', (req, res) => {
  const { arrayIndex } = req.params;
  if (logs[arrayIndex]) {
    logs[arrayIndex] = req.body;
    res.send("Updated Captain's Logs");
  } else {
    res.redirect('/error');
  }
});

//DELETE (At the index in the logs array)
logsController.delete('/:arrayIndex', (req, res) => {
  const { arrayIndex } = req.params;
  if (logs[arrayIndex]) {
    const deleteLogs = logs.splice(arrayIndex, 1);
    res.json(deleteLogs);
  } else {
    res.redirect('/error');
  }
});

module.exports = logsController;
