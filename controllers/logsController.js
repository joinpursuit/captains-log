const express = require("express");

const logsArray = require("../models/log");

const logs = express.Router();

logs.get("/", (request, respond) => {
  console.log("GET request to / logs");
  respond.send(logsArray);
});

module.exports = logs;