// DEPENDENCIES
const express = require("express");
const logs = require("../models/log");
const logsControllers = express.Router();
const { validateURL } = require("./validation");

// ROUTES

//    ID
logsControllers.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json(logs[id] ? logs[id] : res.status(404).redirect());
});
//    QUERY
logsControllers.get("/", (req, res) => {
  const { order, mistakes, lastCrisis } = req.query;

  switch (true) {
    case lastCrisis === "gt10":
      res.send(
        logs.filter((item) => {
          return item.daysSinceLastCrisis > 10;
        })
      );
      break;
    case lastCrisis === "gte20":
      res.send(
        logs.filter((item) => {
          return item.daysSinceLastCrisis >= 20;
        })
      );
      break;
    case lastCrisis === "lte10":
      res.send(
        logs.filter((item) => {
          return item.daysSinceLastCrisis <= 10;
        })
      );
      break;
    case mistakes === "true":
      res.send(
        logs.filter((item) => {
          return item.mistakesWereMadeToday;
        })
      );
      break;
    case mistakes === "false":
      res.send(
        logs.filter((item) => {
          return !item.mistakesWereMadeToday;
        })
      );
      break;
    case order === "asc":
      res.send(
        [...logs].sort((a, b) => {
          var nameA = a.captainName.toUpperCase();
          var nameB = b.captainName.toUpperCase();

          return nameA < nameB ? -1 : 1;
        })
      );
      break;
    case order === "desc":
      res.send(
        [...logs].sort((a, b) => {
          var nameA = a.captainName.toUpperCase();
          var nameB = b.captainName.toUpperCase();

          return nameA < nameB ? 1 : -1;
        })
      );
      break;
    default:
      res.json(logs);
      break;
  }
});

// CREATE
logsControllers.post("/", validateURL, (req, res) => {
  logs.push(req.body);
  res.json(logs[logs.length - 1]);
});

// EXPORT
module.exports = logsControllers;
