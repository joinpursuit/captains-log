/** @format */

const express = require('express');
const logs = express.Router();
const logsArray = require('../models/logs.js');

// CREATE
logs.post('/', (req, res) => {
	if (logsArray) {
		logsArray.push(req.body);
		res.json(logsArray[logsArray.length - 1]);
	} else {
		res.status(404).redirect('*');
	}
});

// SHOW
logs.get('/:arrayIndex', (req, res) => {
	const { arrayIndex } = req.params;
	if (logsArray[arrayIndex]) {
		res.json(logsArray[arrayIndex]);
	} else {
		res.redirect('/*');
	}
});

// DESTROY
logs.delete('/:arrayIndex', (req, res) => {
	const { arrayIndex } = req.params;
	if (logsArray[arrayIndex]) {
		const { arrayIndex } = req.params;
		const deletedLog = logsArray.splice(arrayIndex, 1);
		res.status(200).json(deletedLog);
	} else {
		res.redirect('/*');
	}
});

// UPDATE
logs.put('/:arrayIndex', (req, res) => {
	const { arrayIndex } = req.params;
	if (logsArray[arrayIndex]) {
		const { arrayIndex } = req.params;
		logsArray[arrayIndex] = req.body;
		res.status(200).json(logsArray[arrayIndex]);
	} else {
		res.redirect('/*');
	}
});

module.exports = logs;
