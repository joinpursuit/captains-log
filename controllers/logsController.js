const express = require("express");
const req = require("express/lib/request");
const { send } = require("express/lib/response");

const logsArray = require("../models/log");
const log = express.Router();

log.get("/", (_, respond) => {
  respond.json(logsArray);
});

log.get("/:id", (request, response) => {
  const { id } = request.params;
  if (!logsArray[id]) {
    response.redirect("/logs");
  }
  response.status(201).json(logsArray[id]);
});

log.post("/", (request, response) => {
  const newLog = request.body;
  logsArray.push(newLog);
  // console.log(newLog)
  response.status(201).json(logsArray);
});

log.delete("/:id", (request, response) => {
  const { id } = request.params;
  if (logsArray[id]) {
    logsArray.splice(id, 1);
    response.json(logsArray);
  }
});

module.exports = log;
