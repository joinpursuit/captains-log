const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

logs.post("/", (req, res) => {
  logsArray.push(req.body);
});

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id < 0 || id >= logsArray.length) {
    res.redirect(404).json({ error: "Not found" });
  }
  res.json(logsArray[id]);
});

module.exports = logs;
