const express = require("express");
const logs = express.Router();
const logsArr = require("../models/log.js");

logs.get("/", (req, res) => {
  res.json(logsArr);
});

logs.get("/:id", (req, res) => {
  const { id } = req.params;
  if (logsArr[id]) {
    res.send(logsArr[id]);
  } else {
    res.redirect("*");
  }
});

logs.post("/", (req, res) => {
  logsArr.push(req.body);
  res.json(logsArr[logsArr.length - 1]);
});

logs.delete("/:id", (req, res) => {
  const deletedLog = logsArr.splice(req.params.id, 1);
  res.status(200).json(deletedLog);
});

module.exports = logs;
