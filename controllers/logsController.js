const logs = require("../models/log.js");
const express = require("express");
const logsController = express.Router();

logsController.get("/", (req, res) => {
  res.json(logs);
});

logsController.get("/:id", (req, res) => {
  const { id } = req.params;
  if (logs[id]) {
    res.json(logs[id]);
  } else {
    res.redirect("/error");
  }
});

logsController.post("/", (req, res) => {
  logs.push(req.body);
  res.send(logs[logs.length - 1]);
});

module.exports = logsController;
