const logs = require("express").Router();
const logsArray = require("../models/log.js");

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});

logs.get("/:id", (req, res) => {
  const {id} = req.params;
  if (logsArray[id]) {
    res.json(logsArray[id]);
  } else {
    res.redirect("/404");
  }
});

logs.get("/", (req, res) => {
  const { order, mistakes, lastCrisis } = req.query;

  let numberCheck;
  if(lastCrisis){
    const lastCrisisArray = lastCrisis.split('');
    numberCheck = Number(lastCrisisArray.filter(lc => {
      return !isNaN(lc) === true;
    }).join(''));
  }

  if(order === 'asc') {
    res.json(
      logsArray.sort((a,b) => {
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
      logsArray.sort((a,b) => {
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
      logsArray.filter((log) => {
        return log.mistakesWereMadeToday === true;
      })
    );
  } else if (mistakes === "false") {
    res.json(
      logsArray.filter((log) => {
        return log.mistakesWereMadeToday === false;
      })
    );
  } else if(lastCrisis && lastCrisis.includes("gte")) {
    res.json(
      logsArray.filter((log) => {
        return log.daysSinceLastCrisis >= numberCheck;
      })
    );
  } else if(lastCrisis && lastCrisis.includes("gt")) {
    res.json(
      logsArray.filter((log) => {
        return log.daysSinceLastCrisis > numberCheck;
      })
    );
  } else if(lastCrisis && lastCrisis.includes("lte")) {
    res.json(
      logsArray.filter((log) => {
        return log.daysSinceLastCrisis <= numberCheck;
      })
    );
  } else if(lastCrisis && lastCrisis.includes("lt")) {
    res.json(
      logsArray.filter((log) => {
        return log.daysSinceLastCrisis < numberCheck;
      })
    );
  } else {
    res.json(logsArray);
  }
});

module.exports = logs;
