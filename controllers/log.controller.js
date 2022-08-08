const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.get("/:id", (req, res) => {
  const { id } = req.params;
  if (logsArray[id]) {
    res.send(logsArray[id]);
  } else {
    res.redirect("*");
  }
});

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});

logs.delete("/:id", (req, res) => {
  const { id } = req.params;
  logsArray.splice(id, 1);
  res.send(logsArray);
});

logs.put("/:id", (req, res) => {
  const { id } = req.params;
  const upData = req.body;
  logsArray[id] = upData;
  res.send(logsArray[id]);
});

module.exports = logs;
