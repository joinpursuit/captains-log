const express = require('express');
const logs = express.Router();
const logsArray = require('../models/log.js');

// route for show
logs.get('/:id', (req, res) => {
	if (logsArray[req.params.id]) {
		res.send(logsArray.req.params.id);
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
	const id = req.params.id
	if (logs[id]) {
		logs[id] = req.body
		res.send('logs updated!')
	} else {
		res.status(404).redirect('Error!')
	}
})

// deleting
logs.delete('/:id', (req, res) =>{
	const id = req.params.id
	if (logs[id]) {
		const deleteId = logs.splice(id,1)
		res.send(deleteId)
	} else {
		res.status(404).redirect('Error!')
	}
})
module.exports = logs;
