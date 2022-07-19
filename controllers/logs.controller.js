const express = require('express');
const logs = express.Router();
const logsArray = require('../models/log.js');

// sends the logs array
logs.get('/', (req, res) => {
	res.send(logsArray);
});

// route for show and redirect
logs.get('/:id', (req, res) => {
	const id = req.params.id;
	if (logsArray[id]) {
		res.send(logsArray[req.params.id]);
	} else {
		res.status(404).redirect('Error!');
	}
});

//  route for create
logs.post('/', (req, res) => {
	logsArray.push(req.body);
	res.send(logsArray[logsArray.length - 1]);
});

// update route
logs.put('/:id', (req, res) => {
	const id = req.params.id;
	if (logs[id]) {
		logs[id] = req.body;
		res.send('logs updated!');
	} else {
		res.status(404).redirect('Error!');
	}
});

// deleting
logs.delete('/:id', (req, res) => {
	const id = req.params.id;
	if (logsArray[id]) {
		const deleteId = logsArray.splice(id, 1);
		res.send(deleteId);
	} else {
		res.status(404).redirect('Error!');
	}
});
module.exports = logs;
