const express = require("express");
const logs = express.Router();
const logsArray = require("../models/logs.js");

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.get("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    res.json(logsArray[index]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});

module.exports = logs;
