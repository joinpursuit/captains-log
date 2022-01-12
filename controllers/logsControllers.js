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
    response.redirect(404).json({ error: "Resource not found" });
  }
});

logs.post("/", (request, response) => {
  console.log("POST to /logs");
  logsArray.push(request.body);
  response.status(201).json(logsArray);
});

logs.delete("/:index", (request, response) => {
  const { index } = request.params;
  if (logsArray[index]) {
    const deletedLog = logsArray.splice(index, 1)[0];
    response.status(200).json(deletedLog);
  } else {
    response.status(404).json({ error: "log Not Found" });
  }
});

logs.put("/:index", (request, response) => {
  const { index } = request.params;
  if (logsArray[index]) {
    logsArray[index] = request.body;
    // logsArray.splice(index, 1, request.body);
    response.status(200).json(logsArray);
  } else {
    response.status(404).json({ error: "log Not Found" });
  }
});

module.exports = logs;
