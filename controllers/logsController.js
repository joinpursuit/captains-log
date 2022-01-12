// Dependencies
const express = require("express");
const { response } = require("../app");
const app = require("../app");

//Files
const logsArray = require("../models/log");

const logs = express.Router();
//display all logs in array, GET
logs.get("/", (req, res) => {
  console.log("Request for logs");
  res.json(logsArray);
});

//view specific log, GET
logs.get("/:id", (request, response) => {
  const { id } = request.params;
  console.log(`Pulling log ${id}`);
  logsArray[id]
    ? response.json(logsArray[id])
    : // : response.status(404).json({ error: "Index not found" });
      response.redirect("/logs");
});

// Create new log, POST
logs.post("/", (request, response) => {
  console.log("Creating new log");
  logsArray.push(request.body);
  response.status(201).json(logsArray);
});

//Delete
logs.delete("/:id", (request, response) => {
  let { id } = request.params;
  console.log(`Deleting log ${id}`);
  logsArray[id]
    ? response.status(200).json(logsArray.splice(id, 1)[0])
    : response.status(404).json({ error: "id not found" });
});

//Update
logs.put("/:id", (request, response) => {
  const { id } = request.params;
  console.log(`Updating log ${id}`);
  if (logsArray[id]) {
    logsArray[id] = request.body;
    response.status(200).json(logsArray);
  } else {
    response.status(404).json({ error: "index not found" });
  }
});

module.exports = logs;
