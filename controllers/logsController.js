const express = require("express")
const logs = express.Router()
const logsData = require("../models/log")

const { validateURL } = require("../models/validations")

logs.post("/", validateURL, (req, res) => {
    logsData.push(req.body);
    res.json(logsData[logsData.length - 1]);
  });

logs.get("/", (req, res) => {
    res.json(logsData)
})

logs.get("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    res.json(logsData[arrayIndex]);
  });


module.exports = logs