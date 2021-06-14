const logs = require('express').Router()
const logArr = require('../models/log')

logs.get('/', (req, res) => {
    res.json(logArr)
})

module.exports = logs