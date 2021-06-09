const express = require('express');
const logs = express.Router()
const captArr = require('../models/log');

logs.get("/", (req, res) => {
    res.json(captArr)
})

module.exports = logs;