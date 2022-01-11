// dependencies
const express = require("express");

//config
// when creating routes on seperate page allows us to listen to endpoints exclusive to this file
const logs = express.Router();
const logsArr = require("../models/log.js");

// routes
logs.get("/", (req, res) => {
    res.json(logsArr);
});

// logs.get("*", (req, res) => {});

module.exports = logs;
