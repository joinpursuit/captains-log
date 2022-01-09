//Dependencies
const express = require('express');
const logController = require('../controllers/logController');
//Configuration
const logs = express.Router();

logs
  .route('/')
  .get(logController.checkQuery, logController.getFilteredLogs)
  .post(logController.createLog);

logs
  .route('/:arrayIndex')
  .get(logController.getLog)
  .delete(logController.deleteLog);

logs.get('/invalid', logController.redirect);

module.exports = logs;
