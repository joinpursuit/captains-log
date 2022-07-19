const express = require('express')
const logs = express.Router()

const logsData = require('../models/log.js')


logs.get('/',(req,res)=>{
  res.json(logsData)
})

logs.get('/:arrayIndex', (req,res)=>{
  const { arrayIndex } = req.params;
  if(logsData[arrayIndex]){
    res.json(logsData[arrayIndex])
  }else{
    res.status(302).send('No Captain Log Found')
  }
})

logs.post('/', (req,res)=>{
  console.log('Your Posting Something', req.body)
  logsData.push(req.body);
  res.json(logsData[logsData.length-1]);
})

logs.delete('/:arrayIndex', (req, res)=>{
  const { arrayIndex } = req.params;
  const deletedLogs = logsData.splice(arrayIndex,1)
  res.status(200).json(deletedLogs)
})

module.exports = logs