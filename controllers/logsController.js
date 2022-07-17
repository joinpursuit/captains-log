const express = require('express');
const logs = express.Router();
const logsArray = require('../models/log');

logs.get('/', (req, res) => {
  res.json(logsArray);
});

logs.get('/:arrayIndex', (req, res) => {
  const arrayIndex = parseInt(req.params.arrayIndex);
  if (arrayIndex < 0 || arrayIndex >= logsArray.length) {
    res.status(404).redirect('/anything');
  }
  res.json(logsArray[arrayIndex]);
});

logs.post('/', (req, res) => {
  logsArray.push(req.body);
  res.send(logsArray[logsArray.length - 1]);
});

module.exports = logs;

//.redirect
// https://stackoverflow.com/questions/19035373/how-do-i-redirect-in-expressjs-while-passing-some-context
