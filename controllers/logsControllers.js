// DEPENDENCIES
const express = require("express");
const logs = require("../models/logs");
const logsControllers = express.Router();

// ROUTE
logsControllers.get("/", (req, res) => {
  res.json(logs);
});

// EXPORT
module.exports = logsControllers;
