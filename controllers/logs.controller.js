const express = require('express');
const logs = express.Router();
const logsArray = require('../models/log.js');

logs.get('/', (req, res) => {
  const { order } = req.query;
  const logsArrayCopy = [...logsArray];

  if (order) {
    if (order === 'ascend') {
      res.send(
        logsArrayCopy.sort((a, b) => {
          if (a.captainName < b.captainName) {
            return -1;
          }
          if (a.captainName > b.captainName) {
            return 1;
          }
          return 0;
        }),
      );
    } else if (order === 'descend') {
      res.send(
        logsArrayCopy.sort((a, b) => {
          if (a.captainName < b.captainName) {
            return 1;
          }
          if (a.captainName > b.captainName) {
            return -1;
          }
          return 0;
        }),
      );
    }
  } else {
    res.send(logsArray);
  }
});

logs.get('/:id', (req, res) => {
  if (logsArray[req.params.id]) {
    res.json(logsArray[req.params.id]);
  } else {
    res.status(403).redirect('/error');
  }
});

logs.post('/', (req, res) => {
  logsArray.push(req.body);
  res.send(logsArray[logsArray.length - 1]);
});


logs.delete('/:id', (req, res) => {
    const {id } = req.params
    logsArray.splice(id,1)
   
    res.send(logsArray)
  });

module.exports = logs;
