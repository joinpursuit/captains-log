// DEPENDENCIES
const express = require("express");
const logsData = require("../models/log.js");

// CONFIG
const logs = express.Router();


// ROUTES

// GET => index
logs.get("/", (req, res) => {
  //
  res.json(logsData);
});

// GET => Show
logs.get("/:id", (req, res) => {
  const { id } = req.params;
  //
  (logsData[id]) ? res.json(logsData[id]) : res.status(404).redirect('/error')
});

// POST => Create
logs.post("/", (req, res) => {
  logsData.push(req.body);
  res.send(logsData[logsData.length - 1]);
});


// DELETE => Destroy
logs.delete("/:indexArray", (req, res) => {
  const deletedLog = logsData.splice(req.params.indexArray, 1);
  res.status(200).json(deletedLog);
});

// EXPORT
module.exports = logs;