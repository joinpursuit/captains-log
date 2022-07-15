const express = require('express')
const logs = express.Router()
const logsArray = require('../models/log')

logs.get('/', (req, res) => {
  res.json(logsArray)
})

logs.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)

  if (logsArray[id]) {
    res.json(logsArray[id])
  }
  res.status(404).redirect('Oops! Wrong id.')
})

logs.post('/', (req, res) => {
  logsArray.push(req.body)
  res.json(logsArray[logsArray.length - 1])
})

module.exports = logs
