const express = require("express");
const req = require("express/lib/request");
const { send } = require("express/lib/response");

const logsArray = require("../models/log");
const log = express.Router();

log.get("/", (_, respond) => {
  respond.json(logsArray);
});

log.post("/", (request, respond) => {
  respond.send(request.body);
});

module.exports = logs;
