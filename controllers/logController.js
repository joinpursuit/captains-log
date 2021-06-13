const express = require("express");
const logs = express.Router();
const captainLogs = require("../models/log.js");
//console.log(captainLogs)

const validateBody = (req, res, next) => {
  const {
    captainName,
    title,
    post,
    mistakesWereMadeToday,
    daysSinceLastCrisis,
  } = req.body;
  if (!captainName) {
    res.status(400).send();
  }
  return next();
};
logs.get("/", (req, res) => {
  res.status(200).json(captainLogs);
});

logs.get("/:id", (req, res) => {
  const { id } = req.params;
  if (captainLogs[id]) {
    res.json(captainLogs[id]);
  } else {
    res.redirect("/404");
  }
});

logs.post("/", validateBody, (req, res) => {
  captainLogs.push(req.body);
  res.json(captainLogs[captainLogs.length - 1]);
});

logs.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (captainLogs[id]) {
    const deleted = captainLogs.splice(id, 1);
    res.json(deleted[0]);
  } else {
    res.redirect("/404");
  }
});

logs.put("/:id", validateBody, (req, res) => {
  const { id } = req.params;
  if (captainLogs[id]) {
    captainLogs[id] = req.body;
    res.json(captainLogs[id]);
  } else {
    res.redirect("/404");
  }
});
module.exports = logs;
