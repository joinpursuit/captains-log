const logs = require("express").Router();
const logArray = require("../models/log.js");

logs.get("/", (req, res) => {
  const { order, mistakes, lastCrisis } = req.query;

  const lastCrisisArray = lastCrisis.split('');
  const numberCheck = Number(lastCrisisArray.filter(lc => {
    return !isNaN(lc) === true;
  }).join(''));

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
  } else if(lastCrisis.includes("gte")) {
    res.json(
      logArray.filter((log) => {
        return log.daysSinceLastCrisis >= numberCheck;
      })
    );
  } else if(lastCrisis.includes("gt")) {
    res.json(
      logArray.filter((log) => {
        return log.daysSinceLastCrisis > numberCheck;
      })
    );
  } else if(lastCrisis.includes("lte")) {
    res.json(
      logArray.filter((log) => {
        return log.daysSinceLastCrisis <= numberCheck;
      })
    );
  } else {
    res.json(logArray);
  }
});

module.exports = logs;
