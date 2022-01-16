const express = require("express");
const logs = express.Router();
const logsArray = require("../models/logs.js");

logs.get("/", (req, res) => {
  res.json(logsArray);
});

module.exports = logs;
