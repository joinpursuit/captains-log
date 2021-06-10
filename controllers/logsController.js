const logs = require("express").Router();
const logsArray = require("../models/log");

logs.get("/", (req, res) => {
  const { order, mistakes, lastCrisis } = req.query;
  if (order === "asc") {
    res.json(
      logsArray.sort((a, b) => (a.captainName > b.captainName ? 1 : -1))
    );
  } else if (order === "desc") {
    res.json(
      logsArray.sort((a, b) => (a.captainName > b.captainName ? -1 : 1))
    );
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
  } else if (lastCrisis === "gt10") {
    res.json(
      logsArray.filter((log) => {
        return log.daysSinceLastCrisis > 10;
      })
    );
  } else if (lastCrisis === "gte20") {
    res.json(
      logsArray.filter((log) => {
        return log.daysSinceLastCrisis >= 20;
      })
    );
  } else if (lastCrisis === "lte5") {
    res.json(
      logsArray.filter((log) => {
        return log.daysSinceLastCrisis <= 5;
      })
    );
  } else {
    res.json(logsArray);
  }
});

module.exports = logs;
