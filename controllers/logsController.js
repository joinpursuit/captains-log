const express = require('express');
const logs = express.Router();
const logsArray = require('../models/log.js');

logs.get('/', (req, res) => {
  res.json(logsArray);
});

logs.get('/:index', (req, res) => {
   const { index } = req.params;
   if(logsArray[index]) {
    res.json(logsArray[index]); 
   } else {
    res.redirect({message: "Page not found"});   
   }
});


logs.post('/', (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1]);
});

logs.delete('/:index', (req, res) => {
    const { index } = req.params
    if (logsArray[index]) {
        const deleteLog = logsArray.splice(index, 1)
        res.status(200).json(deleteLog)
    } else {
        res.status(404).json({message: 'Page Not found'})
    }
})

logs.put('/:index', (req, res) => {
    const { index } = req.params
    if(logsArray[index]) {
        logsArray[index] = req.body
        res.status(200).json(logsArray(index))
    } else {
        res.status(404).json({message: 'Page not found'})
    }
});


module.exports = logs;