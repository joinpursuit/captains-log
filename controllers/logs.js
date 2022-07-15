const express = require("express")
const logsArray = require("../models/log")
const logs = express.Router()
const { validateURL } = require('../models/validations.js');

logs.use(express.json());



logs.get('/', (req, res) => {
    console.log("Get /logs")
    res.send(logsArray) 
})

logs.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id < 0 || id >= logsArray.length) {
      res.redirect(404);
      return;
    } else {
      res.json(logsArray[id]);
    }
  });


// CREATE
logs.post('/', (req, res) => {
    logsArray.push(req.body);
    res.send(logsArray[logsArray.length - 1]);
  });

  // UPDATE
logs.put('/:arrayIndex', validateURL, async (req, res) => {
    if (logsArray[req.params.arrayIndex]) {
      logsArray[req.params.arrayIndex] = req.body;
      res.status(200).json(logsArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  });

  //DELETE

logs.delete('/:arrayIndex', (req, res) => {
    if (logsArray[req.params.arrayIndex]) {
      const deletedlog = logsArray.splice(req.params.indexArray, 1);
      console.log(deletedlog);
      res.status(200).json(deletedlog - 1);
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  });

  module.exports=logs