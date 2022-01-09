const express = require("express");

const logsArray = require("../models/log");

const logs = express.Router();

logs.get("/", (req, res) => {
  console.log("GET request to / logs");
  res.send(logsArray);
});

module.exports = logs;
