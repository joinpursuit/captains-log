const express = require('express')
const logs = express.Router()
const logsArray = require('../models/log')

logs.get('/', (req, res) => {
	res.status(200).json(logsArray)
})

logs.get('/:id', (req, res) => {
	const { id } = req.params
	if (logsArray[id]) {
		res.json(logsArray[id])
	} else {
		res.redirect('/404')
	}
})

logs.post('/', (req, res) => {
	logsArray.push(req.body)
	res.json(logsArray[-1])
})

logs.put('/:id', (req, res) => {
	const { id } = req.params
	if (logsArray[id]) {
		logsArray[id] = req.body
		res.status(200).json(logsArray[id])
	} else {
		res.redirect('/404')
	}
})

logs.delete('/:id', (req, res) => {
	const { id } = req.params
	if (logsArray[id]) {
		const deletedLogs = logsArray.splice(id, 1)
		res.status(200).json(deletedLogs)
	} else {
		res.redirect('/404')
	}
})

module.exports = logs
