// DEPENDENCIES
const express = require("express");

// CONFIG
const logs = express.Router();
const logsData = require("../models/log.js");

// ROUTES

// GET => index
logs.get("/", (req, res) => {
  //
  res.send(logsData);
});

// GET => Show
logs.get("/:id", (req, res) => {
  const { id } = req.params;
  //
  (logsData[id]) ? res.json(logsData[id]) : res.status(404).redirect('/')
});

// // POST => Create
logs.post("/", (req, res) => {
  console.log(req)
  logsData.push(req.body);
  res.json(logsData[logsData.length - 1]);
});

// // DELETE => Destroy
logs.delete("/:indexArray", (req, res) => {
  const deletedLog = logsData.splice(req.params.indexArray, 1);
  res.status(200).json(deletedLog);
});


// EXPORT
module.exports = logs;