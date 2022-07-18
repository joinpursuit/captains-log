const express = require("express");
const logs = express.Router();

const logsData = require("../models/log.js");

logs.get("/", (req, res) => {
  res.json(logsData);
});

logs.post("/", (req, res) => {
  logsData.push(req.body);
  res.json();
});

logs.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (logsData[arrayIndex]) {
    res.json(logsData[arrayIndex]);
  } else {
    res.status(404).json({ error: "Not found!" });
  }
});

logs.delete("/:indexArray", (req, res) => {
  const deletedLog = logsData.splice(req.params.indexArray, 1);
  res.status(200).json(deletedLog);
});

module.exports = logs;
