const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.get("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    res.json(logsArray[index]);
  } else {
    res.redirect("/404");
  }
});

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});

logs.delete("/:index", (req, res) => {
  const { index } = req.params;
  const deletedLog = logsArray.splice(index, 1);
  res.status(200).json(deletedLog);
});

logs.put("/:index", (req, res) => {
  const { index } = req.params;
  logsArray[index] = req.body;
  res.status(200).json(logsArray[index]);
});

module.exports = logs;
