const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});

logs.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;

  if (logsArray[arrayIndex]) {
    res.status(200).json(logsArray[arrayIndex]);
  } else {
    res.redirect("/404");
  }
});

logs.put("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (logsArray[arrayIndex]) {
    logsArray[arrayIndex] = req.body;
    res.status(200).json(logsArray[arrayIndex]);
  } else {
    res.redirect("/404");
  }
});

logs.delete("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;

  if (logsArray[arrayIndex]) {
    logsArray.splice(arrayIndex, 1);
    res.status(200).json(logsArray);
  } else {
    res.redirect("/404");
  }
});

module.exports = logs;
