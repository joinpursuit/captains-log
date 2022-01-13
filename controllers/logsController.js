const express = require("express");
const log = express.Router();
const logArray = require("../models/log.js");

log.get("/", (req, res) => {
  res.json(logArray);
});
//GET
log.get("/:id", (request, response) => {
  if(logArray[request.params.id]) {
    response.send(logArray[request.params.id])
  } else {
    // response.status(404).json({ error: "Resource not found" });
    response.redirect("/logs/:id")
  }
})
//POST
log.post("/", (request, response) => {
  console.log("POST to /logs")
  logArray.push(request.body)
  response.json(logArray[logArray.length - 1])
})

// DELETE
log.delete("/:id", (request, response) => {
  if (logArray[request.params.id]) {
    const deletedLog = logArray.splice(request.params.id, 1);
    response.status(200).json(deletedLog);
  } else {
    response.status(404).json({ error: "Not found" });
  }
});

module.exports = log;