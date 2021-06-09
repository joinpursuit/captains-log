const express = require("express");

const logs = express.Router();
const logsArray = require("../models/log");

logs.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (logsArray[arrayIndex]) {
    res.status(200).json(logsArray[arrayIndex]);
  } else {
    res.redirect("/404");
  }
});

logs.get("/", (req, res) => {
  res.send(logsArray);
});

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});

logs.delete("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (logsArray[arrayIndex]) {
    logsArray.splice([arrayIndex], 1);
    res.status(200).json(logsArray);
  } else {
    res.redirect("/404");
  }
});

module.exports = logs;
