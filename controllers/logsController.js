const express = require("express");
const log = express.Router();
const logArray = require("../models/log.js");

log.get("/", (req, res) => {
  res.json(logArray);
});

module.exports = log;