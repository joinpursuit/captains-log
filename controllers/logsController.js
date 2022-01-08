//Dependencies
const express = require('express');
const logController = require('../utilities/routeHandlers');
//Configuration
const logs = express.Router();

logs.route('/').get(logController.getAllLogs).post(logController.createLog);

logs
  .route('/:arrayIndex')
  .get(logController.getLog)
  .delete(logController.deleteLog);

logs.get('/invalid', logController.redirect);

module.exports = logs;
