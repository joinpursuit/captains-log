const { request } = require("express");
const express = require("express");
const app = require("../app");
const logsArray = require("../models/log");

const logs = express.Router();

logs.get("/", (request, response) => {
  response.json(logsArray);
});

logs.get("/:id", (request, response) => {
  const { id } = request.params;
  if (!logsArray[id]) {
    response.redirect("/logs");
  }
  response.status(201).json(logsArray[id]);
});

logs.post("/", (request, response) => {
    const newLog = request.body;
    logsArray.push(newLog);
    // console.log(newLog)
    response.status(201).json(logsArray);
});

logs.delete("/:id", (request, response) => {
    const { id } = request.params
    if (logsArray[id]) {
        logsArray.splice(id, 1) 
        response.json(logsArray)
    }
})

module.exports = logs;
