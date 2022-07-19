const express = require("express");
const logs = express.Router();

const logsData = require("../models/log.js");

//INDEX
logs.get("/", (req, res) => {
  res.json(logsData);
});

//CREATE
logs.post("/", (req, res) => {
  logsData.push(req.body);
  res.json();
});

//SHOW
logs.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (logsData[arrayIndex]) {
    res.json(logsData[arrayIndex]);
  } else {
    res.status(302).send("Not found. Please return to home page.");
  }
});

//DESTROY
logs.delete("/:arrayIndex", (req, res) => {
  const deletedLog = logsData.splice(req.params.arrayIndex, 1);
  res.status(200).json(deletedLog);
});

//UPDATE
logs.put("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  logsData[arrayIndex] = req.body;
  res.status(200).json(logsData[arrayIndex]);
});

module.exports = logs;
