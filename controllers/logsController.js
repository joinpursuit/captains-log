const logs = require("../models/log.js");
const express = require("express");
const logsController = express.Router();

logsController.get("/", (req, res) => {
  res.json(logs);
});

module.exports = logsController;
