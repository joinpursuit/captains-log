// DEPENDENCIES
const express = require("express");

// CONFIG
const logs = express.Router();
const logsData = require("../models/log.js");

// ROUTES

// GET => index
logs.get("/", (req, res) => {

  res.send(logsData);
});
// GET => Show
// logs.get("/:id", (req, res) => {
//   const { id } = req.params;
//   res.json(logsData[id]);
// });

// // POST => Create
// logs.post("/", (req, res) => {
//   logsData.push(req.json);
//   res.json(logsData[logsData.length - 1]);
// });

// // DELETE => Destroy
// logs.delete("/:indexArray", (req, res) => {
//   const deletedLog = logsData.splice(req.params.indexArray, 1);
//   res.status(200).json(deletedLog);
// });


// EXPORT
module.exports = logs;