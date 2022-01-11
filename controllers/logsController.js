// Dependencies
const express = require("express");
const { response } = require("../app");
const app = require("../app");

//Files
const logsArray = require("../models/log");

const logs = express.Router();

logs.get("/", (req, res) => {
  console.log("Request for logs");
  res.json(logsArray);
});

module.exports = logs;
