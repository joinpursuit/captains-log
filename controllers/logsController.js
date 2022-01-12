const express = require('express');
const app = require('../app');
const logsArray = require('../models/log');

const logs = express.Router();

logs.get('/',(request, response) => {
    response.json(logsArray);
});


module.exports = logs;