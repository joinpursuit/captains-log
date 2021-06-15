const logs = require('express').Router()
const logArr = require('../models/log')

logs.get('/', (req, res) => {
    res.json(logArr)
})

logs.get('/:logIndex', (req, res) => {
    const log = logArr[req.params.logIndex]

    if(log) {
        res.json(log)
    } else {
        res.redirect('/404')
    }
})

logs.post('/', (req, res) => {
    logArr.push(req.body)
    res.json(logArr[logArr.length - 1])
})

module.exports = logs