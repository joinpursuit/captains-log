const express = require('express');
const logs = express.Router();
const logsArray = require('../models/log.js');

const validateBody = (req, res, next) => {
    const { name, title, post, mistake, crisis } = req.body;

    if(!name || typeof name != 'string') {
        res.status(400).send("Missing name or not a string.");
    } else if(!title || typeof title != 'string') {
        res.status(400).send("Missing title or not a string.");
    } else if (!post || typeof post != 'string') {
        res.status(400).send("Missing post or not a string.");
    } else if (!mistake || typeof mistake != 'boolean') {
        res.status(400).send("Missing mistake or not a boolean.");
    } else if (!crisis || typeof crisis != 'number') {
        res.status(400).send("Missing crisis or not a number.");
    };

    next();
};

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

logs.get('/:id', (req, res) => {
    const id = req.params.id;
    logsArray[id] ? 
    res.status(200).json(logsArray[id]): res.redirect('/404');
});

logs.post('/', validateBody, (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1]);
});



module.exports = logs;