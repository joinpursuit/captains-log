const logs = require('express').Router();
const logsArray = require('../models/log');

logs.get('/', (req, res) => {
    // console.log("hello from log.js")
    res.json(logsArray)
})
logs.get("/:id", (req, res) => {
    const { id } = req.params;
    if (logsArray[id]) {
      res.json(logsArray[id]);
    } else {
      res.redirect("/404");
    }
});
  
logs.post('/', (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1])
})

logs.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (logsArray[id]) {
        const deletedLog = logsArray.splice(id, 1);
        res.status(200).json(deletedLog)
    } else {
        res.redirect('/404')
    }
})

logs.put('/:id', (req, res) => {
    const { id } = req.params;
    if (logsArray[id]) {
        logsArray[req.params.id] = req.body;
    res.status(200).json(logsArray[req.params.id]);
    } else {
        res.redirect('/404')
    }
    
})
module.exports = logs