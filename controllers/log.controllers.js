const express = require("express");
const logs = express.Router();
const logArray = require("../models/log");

logs.get("/", (req, res) => {
  res.json(logArray);
});

logs.get("/:id", (req, res) => {
  const { id } = req.params;
  if (logArray[id]) {
    res.json(logArray[req.params.id]);
  } else {
    res.status(404).redirect("/Error");
  }
});

logs.delete("/:id", (req, res) => {
  const deleted = logArray.splice(req.params.id, 1);
  res.status(200).json(deleted);
});

logs.post("/", (req, res) => {
  logArray.push(req.body);
  res.json(logArray[logArray.length - 1]);
});

module.exports = logs;
