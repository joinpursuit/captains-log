const express = require("express");
const log = express.Router();
const logArray = require("../models/log.js");

log.get("/", (req, res) => {
  res.json(logArray);
});

log.get("/:id", (request, response) => {
  if(logArray[request.params.id]) {
    response.send(logArray[request.params.id])
  } else {
    response.status(404).json({ error: "Resource not found" });
  }
})

log.post("/", (request, response) => {
  console.log("POST to /log")
  logArray.push(request.body)
  response.json(logArray)
})

module.exports = log;