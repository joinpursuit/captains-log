const { request } = require("express");
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

//destructured index and set it equal to request.params
//.params already exists in request
//accesses any value after colon (:), i.e. /logs/2
//sending a response to get the index from array
logs.get("/:index", (request, response) => {
  const { index } = request.params;
  response.send(logsArray[index])
})

logs.get('/:index', (request, response) => {
  const { index } = request.params;
  if(logsArray[index]){
    response.json(logsArray[index])
  }
  else{
    response.redirect('/', 302)
  }
})

logs.delete("/:index", (request, response) => {
  const { index } = request.params;
  if (logsArray[index]) {
    const deleted = logsArray.splice(index, 1)[0];
    response.status(200).json(deleted);
  } else {
    response.status(404).json({ error: "log Not Found" });
  }
});



module.exports = logs;