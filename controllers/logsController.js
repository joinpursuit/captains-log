const express = require("express");
const { append } = require("express/lib/response");

const logsArray = require("../models/log");

const logs = express.Router();

logs.get("/", (req, res) => {
  console.log("GET request to / logs");
  res.send(logsArray);
});

logs.post("/", (req, res) => {});

logs.get("/:arrayIndex", (req, res) => {
  console.log("GET request received to route: /logs/:arrayIndex");
  const arrayIndex = req.params.arrayIndex;
  res.json(logsArray[arrayIndex]);
});

//req.params.id === :id

logs.delete("/:id", (req, res) => {
  logsArray.splice(req.params.id, 1);
  res.status(200).json(logsArray);
});

module.exports = logs;
