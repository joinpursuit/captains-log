const express = require('express');
const logs = express.Router();


const logsData = require("../models/log.js")
const { validateURL } = require('../models/validations');

logs.get('/', (req, res) => {
    res.json(logsData)
})
logs.get('/:arrayIndex', (req, res) => {
  // console.log(req.params);
  const { arrayIndex } = req.params;
  if (logsData[arrayIndex]) {
    res.json(logsData[arrayIndex]);
  } else {
    res.redirect(404).send({ error: 'Not found' });
  }
});
logs.post('/', validateURL, (req, res) => {
  logsData.push(req.body);
  res.json(logsData[logsData.length - 1]);
});


logs.delete('/:arrayIndex', (request, response) => {
  console.log('Delete /logs');
  const { arrayIndex: index } = request.params;
  logsData.splice(index, 1);
  response.json(logsData);

});

logs.put('/:arrayIndex', (req, res) => {
 logsData[req.params.arrayIndex] = req.body;
  res.status(200).json(logsData[req.params.arrayIndex]);
});

module.exports = logs

