const express = require("express");
const log = express.Router()

const logArray = require("../models/log");

log.get("/", (req, res) => {
    console.log("Get request to /logs")
    res.send(logArray)
});

log.post("/", (req, res) => {
    
})

module.exports = log;