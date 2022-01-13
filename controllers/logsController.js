const express = require("express");
const logsArray = require('../models/log.js')

const logs = express.Router();

logs.get('/', (_, response) => {
    response.json(logsArray);
});

logs.post('/', (request, response) => {
    response.json(logsArray.push(request.body));
});

logs.get('/:index', (request, response) => {
    const { index } = request.params;
    logsArray[index] 
    ? response.json(logsArray[index])
    : response.redirect('/')
});

logs.delete('/:index', (request, response) => {
    const { index } = request.params;
    logsArray[index]
    ? response.json(logsArray.splice(index, 1))
    : response.status(404).json({ error: 'index not found' })
});

module.exports = logs;