const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

const part1Bonus = require("./logs.controller.part1Bonus.js");

logs.get("/", (req, res) => {
  const { order, mistakes, lastCrisis } = req.query;
  const logsArrayCopy = [...logsArray];

  if (order || mistakes || lastCrisis) {
    part1Bonus(res, logsArrayCopy, order, mistakes, lastCrisis);
  } else {
    res.send(logsArray);
  }
});

logs.get("/:id", (req, res) => {
  if (logsArray[req.params.id]) {
    res.json(logsArray[req.params.id]);
  } else {
    res.status(404).redirect("/error");
  }
});

logs.post("/", (req, res) => {
  const newLog = {
    captainName: req.body.captainName,
    title: req.body.title,
    post: req.body.post,
    mistakesWereMadeToday: req.body.mistakesWereMadeToday,
    daysSinceLastCrisis: req.body.daysSinceLastCrisis,
  };

  if (
    typeof newLog.captainName === "string" &&
    typeof newLog.title === "string" &&
    typeof newLog.post === "string" &&
    typeof newLog.mistakesWereMadeToday === "boolean" &&
    typeof Number(newLog.daysSinceLastCrisis) === "number"
  ) {
    logsArray.push(newLog);
    res.status(200).json(newLog);
  } else {
    res.status(400).send("ERROR: Invalid datatypes");
  }
});

logs.patch("/:id", (req, res) => {
  const updatedLog = {
    captainName: req.body.captainName,
    title: req.body.title,
    post: req.body.post,
    mistakesWereMadeToday: req.body.mistakesWereMadeToday,
    daysSinceLastCrisis: req.body.daysSinceLastCrisis,
  };

  if (logsArray[req.params.id]) {
    if (
      typeof updatedLog.captainName === "string" &&
      typeof updatedLog.title === "string" &&
      typeof updatedLog.post === "string" &&
      typeof updatedLog.mistakesWereMadeToday === "boolean" &&
      typeof Number(updatedLog.daysSinceLastCrisis) === "number"
    ) {
      logsArray[req.params.id] = updatedLog;
      res.status(200).json(updatedLog);
    } else {
      res.status(400).send("ERROR: Invalid datatypes");
    }
  } else {
    res.status(404).redirect("/error");
  }
});

logs.delete("/:id", (req, res) => {
  if (logsArray[req.params.id]) {
    logsArray.splice(req.params.id, 1);
    res.send("log deleted");
  } else {
    res.status(404).redirect("/error");
  }
});

module.exports = logs;
