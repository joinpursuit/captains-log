const express = require("express");
const logs = express.Router();
const logsArray = require("../models/logs");

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.get("/:indexedArray", (req, res) => {
  const indexedArray = parseInt(req.params.indexedArray); //using parseInt to check if the string enumerates to a certain length
  if (indexedArray < 0 || indexedArray >= logsArray.length) {
    res.status(404).redirect("Sorry! Bad params.");
  }
  res.json(logsArray[indexedArray]);
});

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.send(logsArray[logsArray.length - 1]);
});

module.exports = logs;
