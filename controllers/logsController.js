const express = require("express");
const logs = express.Router();

const logsData = require("../models/log.models.js");
const { validateURL } = require("../models/validations");

logs.get("/", (req, res) => {
  res.json(logsData);
});

logs.post("/", validateURL, (req, res) => {
  logsData.push(req.body);
  res.json(logsData[logsData.length - 1]);
});

logs.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (logsData[arrayIndex]) {
    res.json(logsData[arrayIndex]);
  } else {
    res.status(302).send("no logs found - sorry");
  }
});

logs.delete("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  const deletedLog = logsData.splice(arrayIndex, 1);
  res.status(200).send(deletedLog);
});

logs.put("/:index", (req, res) => {
  const { index } = req.params;
  logsData[index] = req.body;
  res.status(200).send(logsData);
});

module.exports = logs;
