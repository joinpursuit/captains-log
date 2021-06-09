const e = require("express");
const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

logs.get("/", (req, res) => {
  const { order, mistakes, lastCrisis } = req.query;
  console.log(req.query)
  res.json(logsArray);
});

module.exports = logs;
