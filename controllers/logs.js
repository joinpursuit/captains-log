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
    const { body } = req;
    logArr.push(body)
    const newIndex = logArr.length - 1
    res.json(logArr[newIndex])
})

logs.put('/:logIndex', (req, res) => {
const { logIndex } = req.params;
logArr[logIndex] = body
res.json(logArr[logIndex])
})

logs.delete('/:logIndex', (req, res) => {
    const { logIndex } = req.params; 
    const delLog = logArr.splice(logIndex, 1)
    res.json(delLog[0])
})



module.exports = logs