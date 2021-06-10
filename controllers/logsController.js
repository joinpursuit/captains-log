const logs = require('express').Router();
const logsArray = require('../models/log');

logs.get('/', (req, res) => {
    // console.log("hello from log.js")
    res.json(logsArray)
})

logs.post('/', (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1])
})
module.exports = logs