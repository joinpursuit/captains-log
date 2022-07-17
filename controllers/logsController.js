const express = require('express');
const logs = express.Router();
const logsArray = require('../models/log');

logs.get('/', (req, res) => {
  res.json(logsArray);
});

logs.get('/:arrayIndex', (req, res) => {
  const arrayIndex = parseInt(req.params.arrayIndex);
  if (arrayIndex < 0 || arrayIndex >= logsArray.length) {
    res.status(404).send('Oops! No log with that id exists');
    return;
  }
  res.json(logsArray[arrayIndex]);
});

module.exports = logs;
