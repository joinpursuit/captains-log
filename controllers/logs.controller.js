express = require("express");
const logs = express.Router();
const logsData = require("../models/log");

logs.get("/", (req, res) => {
  res.json(logsData);
});

logs.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (logsData[arrayIndex]) {
    res.json(logsData[arrayIndex]);
  } else {
    res.status(404).redirect("/Error");
  }
});

logs.post("/", (req, res) => {
  logsData.push(req.body);
  res.json(logsData[logsData.length - 1]);
});

module.exports = logs;
