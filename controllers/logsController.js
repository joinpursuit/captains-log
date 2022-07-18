// DEPENDENCIES
const express = require("express");

// CONFIG
const logs = express.Router();
const logsData = require("../models/log.js");

// ROUTES
logs.get("/", (req, res) => {

  res.send('');
});


// EXPORT
module.exports = logs;