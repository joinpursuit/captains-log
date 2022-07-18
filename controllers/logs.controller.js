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
  logsArray.push(req.body);
  res.send(logsArray[logsArray.length - 1]);
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
