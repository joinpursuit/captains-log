const express = require("express");
const logsArray = require("../models/log");
const logs = express.Router();

logs.get("/", (_, response) => {
  console.log("GET request to /bookmarks");
  response.json(logsArray);
});

logs.get("/:index", (request, response) => {
  const { index } = request.params;
  if (logsArray[index]) {
    response.json(logsArray[index]);
  } else {
    response.status(404).json({ error: "Resource not found" });
  }
});

logs.post("/", (request, response) => {
  console.log("POST to /logs");
  logsArray.push(request.body);
  response.status(201).json(logsArray);
});

module.exports = logs;
