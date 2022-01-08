//Dependencies
const express = require('express');
const getOrganizedLog = require('../utilities/getOrganizedLog');
//Configuration
const logs = express.Router();
const logsArray = require('../models/log');

logs.get('/logs*/', (req, res) => {
  if (JSON.stringify(req.query) === '{}') return res.json(logsArray);
  const [queryKey, queryVal] = Object.entries(req.query)[0];
  const validKeys = {
    order: true,
    mistakes: true,
    lastCrisis: true,
  };

  if (!validKeys[queryKey])
    return res.status(404).json({ status: 'fail', message: 'Invalid Key' }); //guard clause for non existent queryKey

  const organizedLogs = getOrganizedLog(logsArray, queryKey, queryVal);

  res.json({
    status: 'success',
    results: organizedLogs.length,
    data: organizedLogs,
  });
});

module.exports = logs;
