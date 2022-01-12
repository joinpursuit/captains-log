const express = require('express');
const app = require('../app');
const logsArray = require('../models/teamCaptains');

const teamCaptains = express.Router();

teamCaptains.get('/',(request, response) => {
    response.json(logsArray);
});

module.exports = teamCaptains;