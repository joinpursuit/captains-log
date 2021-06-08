const express = require('express');
const logs = express.Router();
const captainLogs = require('../logs/captainLogs.js');

logs.get('/', (req, res) => {
    const query = req.query;

    if (query.order === 'asc') {
        
    }

    res.status(200).json(captainLogs)
});

module.exports = logs