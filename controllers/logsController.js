const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.get("/:id", (req, res) => {
  if (logsArray[req.params.id]) {
    res.json(logsArray[req.params.id]);
  } else {
    res.redirect("/404");
  }
});

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});

module.exports = logs;
