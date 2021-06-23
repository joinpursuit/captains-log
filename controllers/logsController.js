const express = require('express');
const logs = express.Router();
const logsArray = require('../models/logs.js');

logs.get('/', (req, res) => {
    const query = req.query;
    
    if(query.order === 'asc') {
        let sorted = logsArray.sort((a, b) => 
            a.title > b.title ? 1 : -1
        );
        res.status(200).json(sorted);
    } else if (query.order === 'desc') {
        let sorted = logsArray.sort((a, b) => 
            a.title < b.title ? 1 : -1
        );
        res.status(200).json(sorted);
    };

    if(query.mistakes === 'true') {
        let filtered = logsArray.filter(log => log.mistakesWereMadeToday === true);
        res.status(200).json(filtered);
    } else if (query.mistakes === 'false') {
        let filtered = logsArray.filter(log => log.mistakesWereMadeToday === false);
        res.status(200).json(filtered);
    };
    
    if(query.lastCrisis === 'gt10') {
        let filtered = logsArray.filter(log => log.daysSinceLastCrisis > 10);
        res.status(200).json(filtered);
    } else if (query.lastCrisis === 'gte20') {
        let filtered = logsArray.filter(log => log.daysSinceLastCrisis >= 20);
        res.status(200).json(filtered);
    } else if (query.lastCrisis === 'lte5') {
        let filtered = logsArray.filter(log => log.daysSinceLastCrisis <= 5);
        res.status(200).json(filtered);
    };

    res.status(200).json(logsArray);
});




module.exports = logs;