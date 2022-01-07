const express = require('express');
const logs = express.Router();
const logsArray = require('../models/log');

logs.get('/', (req, res) => {
  res.json(nlogsArray);
});

logs.get('/*', (req, res) => {
  //   console.log(req.query);
});

module.exports = logs;
