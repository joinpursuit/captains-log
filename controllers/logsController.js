const express = require("express");

const logsArray = require("../models/log");

const logs = express.Router(); //all routes created here and not in app.js

//aka /logs in browser
logs.get("/", (request, respond) => {
  console.log("GET request to / logs");
  respond.send(logsArray);
});

//adding input to logs array
//sending 201 response to server
logs.post("/", (request, response) => {
  console.log("POST to /logs");
  logsArray.push(request.body);
  response.status(201).json(logsArray);
  //updating the log.js [logsArray] to json
});

logs.get("/:index", (request, response) => {
  const { index } = request.params;
  response.send(logsArray[index])
})

module.exports = logs;