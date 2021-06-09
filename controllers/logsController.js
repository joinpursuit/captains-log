const logs = require("express").Router();
const logArray = require("../models/log.js");

logs.get("/", (req, res) => {
  const { order, mistakes, lastCrisis } = req.query;
  if(order === 'asc') {
    res.json(
      logArray.sort((a,b) => {
        let nameA = a.captainName;
        let nameB = b.captainName;
        if(nameA < nameB){
          return -1
        }
        if(nameA > nameB){
          return 1
        }
        return 0;
      })
    )
  } else if(order === 'desc') {
    res.json(
      logArray.sort((a,b) => {
        let nameA = a.captainName;
        let nameB = b.captainName;
        if(nameA > nameB){
          return -1
        }
        if(nameA < nameB){
          return 1
        }
        return 0;
      })
    )
  } else if (mistakes === "true") {
    res.json(
      logArray.filter((log) => {
        return log.mistakesWereMadeToday === true;
      })
    );
  } else if (mistakes === "false") {
    res.json(
      logArray.filter((log) => {
        return log.mistakesWereMadeToday === false;
      })
    );
  } else if(lastCrisis === 'gt10') {
    res.json(
      logArray.filter((log) => {
        return log.daysSinceLastCrisis > 10;
      })
    );
  } else if(lastCrisis === 'gte20') {
    res.json(
      logArray.filter((log) => {
        return log.daysSinceLastCrisis >= 20;
      })
    );
  } else if(lastCrisis === 'lte5') {
    res.json(
      logArray.filter((log) => {
        return log.daysSinceLastCrisis <= 5;
      })
    );
  } else {
    res.json(logArray);
  }
});

module.exports = logs;
