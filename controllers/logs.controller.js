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

logs.put('/:id', (req, res) => {
  const { id } = req.params
  const newData = req.body
  logs[id] = newData
  res.send(logs[id])
})

logs.delete('/:id', (req, res) => {
  const { id } = req.params
  let itemsDelete = logsArray.splice(id, 1)
  res.send(itemsDelete)
})

module.exports = logs
