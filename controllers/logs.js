const express = require('express');
const logsArray = require('../models/log');
const logs = express.Router();
const { validateURL } = require('../models/validations.js');
const {
  sortByName,
  filterMistakes,
  filterLastCrisis,
} = require('../helper/sorted.js');

logs.use(express.json());

// logs.use('/:id', (req, res, next) => {
//   if (!logs[req.params.id]) {
//     res.status(404).send('Not Found');
//   } else {
//     next();
//   }
// });

logs.get('/', (req, res) => {
  const { order, mistakes, lastCrisis } = req.query;
  //make a copy of the logsArray so we do not manipulate the original array
  let logArrayCopy = [...logsArray];

  if (order) {
    logArrayCopy = sortByName(logArrayCopy, order);
  }

  if (mistakes !== undefined) {
    logArrayCopy = filterMistakes(logArrayCopy, mistakes);
  }

  if (lastCrisis) {
    logArrayCopy = filterLastCrisis(logArrayCopy, lastCrisis);
  }
  res.send(logArrayCopy);
});

logs.get('/:id', (req, res) => {
  if (logsArray[req.params.id]) {
    res.json(logsArray[req.params.id]);
  } else {
    res.redirect('/error');
  }
});

// CREATE
logs.post('/', (req, res) => {

  const userLog = {
    captainName: req.body.captainName,
    title: req.body.title,
    post: req.body.post,
    mistakesWereMadeToday: req.body.mistakesWereMadeToday,
    daysSinceLastCrisis: req.body.daysSinceLastCrisis,
  };
  if (
    typeof userLog.captainName === 'string' &&
    typeof userLog.title === 'string' &&
    typeof userLog.post === 'string' &&
    typeof userLog.mistakesWereMadeToday === 'boolean' &&
    typeof Number(userLog.daysSinceLastCrisis) === 'number'
  ) {
    logsArray.push(userLog);
    res.json(userLog);
  } else {
    res.send('Not Valid Datatype');
  }
// const checkType = {
//         captainName: "string",
//         title: "string",
//         post: "string",
//         mistakesWereMadeToday: true,
//         daysSinceLastCrisis: 1
//     }
  // let isValid = true;

  // for (const key in req.body) {
  //   if (typeof checktype[key] !== typeof req.body[key]) {
  //        console.log(typeof checktype[key] ,typeof req.body[key] )
  //     isValid = false;
  //     break;
  //   }
  // }
  // if (isValid) {
  //}
});

// UPDATE
logs.put('/:id', (req, res) => {
  const userLog = {
    captainName: req.body.captainName,
    title: req.body.title,
    post: req.body.post,
    mistakesWereMadeToday: req.body.mistakesWereMadeToday,
    daysSinceLastCrisis: req.body.daysSinceLastCrisis,
  };
  const id = req.params.id;
  if (
    typeof userLog.captainName === 'string' &&
    typeof userLog.title === 'string' &&
    typeof userLog.post === 'string' &&
    typeof userLog.mistakesWereMadeToday === 'boolean' &&
    typeof Number(userLog.daysSinceLastCrisis) === 'number'
  ) {
      if (logsArray[id]) {
    
        logsArray[id] = newLog;
         res.json(newLog);
      } else {
      res.send({ error: 'Not found' });
    }
  } else {
    res.redirect('/error');
  }
});

//DELETE

logs.delete('/:id', (req, res) => {
  if (logsArray[req.params.id]) {
    const deletedLog = logsArray.splice(req.params.id, 1);
    res.json(deletedLog);
  } else {
    res.redirect('/error');
  }
});

module.exports = logs;
