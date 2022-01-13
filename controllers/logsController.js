// dependencies
const express = require("express");

//config
// when creating routes on seperate page allows us to listen to endpoints exclusive to this file
const logs = express.Router();
const logsArr = require("../models/log.js");

// routes
// sends the logs array
logs.get("/", (req, res) => {
  res.json(logsArr);
});

// adds new log to end of logs array
logs.post("/", (req, res) => {
  logsArr.push(req.body);
  res.json(logsArr[logsArr.length - 1]);
});

// sends the corresponding log when a valid index is given
// sends a redirect when an invalid index is given
logs.get("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArr[index]) {
    res.json(logsArr[index]);
  } else {
    // redirect wildcard
    res.redirect("*");
  }
});

// deletes at the index in the logs array
logs.delete("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArr[index]) {
    res.json(logsArr.splice(index, 1));
  } else {
    res.redirect("*");
  }
});

module.exports = logs;
