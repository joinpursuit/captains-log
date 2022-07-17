const express = require("express");
const logs = express.Router();

const logsData = require("../models/log.js");

logs.get("/", (req, res) => {
  res.json(logsData);
});

logs.get("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    if (logsData[arrayIndex]) {
        res.json(logsData[arrayIndex])
    } else {
        res.status(404).send("page not found")
    }
})

logs.post("/", (req, res) => {
    logsData.push(req.body);
    res.json()
})

module.exports = logs;
