const express = require("express");
const logs = express.Router();
const logArray = require("../models/log.js");

logs.post("/", (req, res) => {
  logArray.push(req.body);
  res.send(logArray[logArray.length - 1]);
  console.log(req.body);
});

logs.get("/", (req, res) => {
  res.json(logArray);
});

logs.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0 || id >= logArray.length) {
    res.status(404).redirect("http://localhost:3333/logs");
    return;
  }
  res.json(logArray[id]);
});

logs.put("/:id", (req, res) => {
  logArray[req.params.id] = req.body;
  res.status(200).json(logArray[req.params.id]);
});

logs.delete("/:id", (req, res) => {
  const deletedLog = logArray.splice(req.params.id, 1);
  res.status(200).json(deletedLog);
});

module.exports = logs;
