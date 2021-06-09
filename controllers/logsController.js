// const express = require("express");
// const logs = express.Router();
const logs = require("express").Router();
const log = require("../models/log.js");

logs.get("/", (req, res) => {
  const { order, mistakes, lastCrisis } = req.query;
  console.log('help')
  res.json(log);
});

module.exports = logs;
