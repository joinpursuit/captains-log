const express = require("express");
const req = require("express/lib/request");
const log = express.Router();
const logArray = require("../models/log.js");

log.get("/", (req, res) => {
  res.json(logArray);
});

log.get("/:id", (request, response) => {
  if (logArray[request.params.id]) {
    response.send(logArray[request.params.id]);
  } else {
    response.redirect("/logs/:id");
  }
});

log.post("/", (request, response) => {
  console.log("POST to /logs");
  logArray.push(request.body);
  response.json(logArray[logArray.length - 1]);
});

log.put("/:id", (request, response) => {
  const { id } = request.params;
  if (logArray[id]) {
    logArray[id] = request.body;
    response.status(200).json(logArray[id]);
  } else {
    response.status(404).json({ error: "Not found" });
  }
});

log.delete("/:id", (request, response) => {
  if (logArray[request.params.id]) {
    const deletedLog = logArray.splice(request.params.id, 1);
    response.status(200).json(deletedLog);
  } else {
    response.status(404).json({ error: "Not found" });
  }
});

module.exports = log;
