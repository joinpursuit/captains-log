const logs = require("express").Router();
const log = require("../models/log")

logs.get("/", (req, res) => {
  res.send(log);
});

module.exports = logs;
