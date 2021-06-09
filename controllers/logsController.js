const logs = require('express').Router();
const logsArray = require('../models/log');

logs.get('/', (req, res) => {
    // console.log("hello from log.js")
    res.json(logsArray)
})


module.exports = logs