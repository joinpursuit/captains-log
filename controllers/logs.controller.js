const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

logs.use("/:id", (req, res, next) => {
  if (!logsArray[req.params.id]) {
    res.redirect(404).send("Not Found");
  }
  next();
});

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(logsArray[id]);
});

logs.put("/:id", (req, res) => {
  const { id } = req.params;
  logs[id] = req.body;
  res.send(logs[id]);
});

logs.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deletedItem = logsArray.splice(id, 1);
  res.send(deletedItem);
});

module.exports = logs;
