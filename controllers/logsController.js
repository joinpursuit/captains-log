const express = require("express");
const logs = express.Router();
const logsData = require("../models/log.js");

logs.get("/", (req, res) => {
  res.json(logsData);
});

logs.get("/:arrayIndex", (req, response) => {
  const { arrayIndex } = req.params;
  if (logsData[arrayIndex]) {
    response.json(logsData[arrayIndex]);
  } else {
    response.status(404).redirect("/error");
  }
});

logs.post("/", (req, res) => {
  logsData.push(req.body);
  res.json(logsData[logsData.length - 1]);
});

logs.delete("/:arrayIndex", (req, res) => {
  const num = req.params;
  const deletedLog = logsData.splice(num, 1);
  res.status(200).json(deletedLog);
});

logs.put("/:arrayIndex", (req, res) => {
    const num = req.params
    logsData[num] = req.body;
    req.status(200).json(logsData[num])
})

module.exports = logs;
