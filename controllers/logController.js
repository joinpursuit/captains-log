const express = require('express');
const logRouter = express.Router();
const logArray = require('../models/log');

logRouter.get('/', (req, res) => {
    res.json(logArray)
})

logRouter.post('/', (req, res) => {
    logArray.push(req.body);
    res.json(logArray[logArray.length-1])
})

logRouter.get('/:index', (req, res) => {
    const { index } = req.params;
    if(logArray[index]){
        res.send(logArray[index]);
    }
    res.status(404).redirect('*');
})

logRouter.put("/:index", (req, res) => {
    let { index } = req.params;
  let { captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis } = req.body;
  if(captainName && title && mistakesWereMadeToday && daysSinceLastCrisis && post){
    logArray[index] =  { captainName, title, mistakesWereMadeToday, post, daysSinceLastCrisis }
    res.status(200).json(logArray[index]);
  }else{
    res.status(404).json({
      error: "Please provide info for all fields."
    })
  }
})

logRouter.delete('/:index', (req, res) => {
    const { index } = req.params;
    if(logArray[index]) {
        let deleted = logArray.splice(index, 1);
        res.json(deleted)
      } else {
        res.status(404).redirect('*');
      }
})

module.exports = logRouter;