const express = require("express");
const logs = express.Router();
const logsData = require("../models/logs.js");

logss.get("/", (req, res) => {
    res.json(logsData)
})
module.exports = logs