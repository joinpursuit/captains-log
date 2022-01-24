//DEPENDENCIES
const express = require("express");
const routeLogs = express.Router();

//FILES
const logs = require("../models/log");
const { filteredLogs, sort, isValid } = require("../helpers/functions");

//ROUTES

//GET LIST OF ALL LOGS, including queries
routeLogs.get("/", (request, response) => {
  console.log("GET request received to route: /logs");
  //List out the queries with values
  const requestQuery = {};
  for (let key in request.query) {
    //No need to filter the order key and keys with empty values
    if (request.query[key] !== "" && key !== "order") {
      requestQuery[key] = request.query[key];
    }
  }

  logsFound = logs.filter((log) => {
    return filteredLogs(requestQuery, log);
  });

  Object.keys(requestQuery).length
    ? response.json(sort(logsFound, request.query.order))
    : response.json(sort(logs, request.query.order));
});

//GET individual view, show one log or redirect if not found
routeLogs.get("/:index", (request, response) => {
  console.log("GET request received to route: /logs/:index");
  const { index } = request.params;
  const logFound = logs.find((log) => log.id == index)
  //undefined if not found
  if (logFound) {
    response.json(logFound);
  } else {
    response.redirect("/redirect");
  }
});

//POST
routeLogs.post("/", (request, response) => {
  console.log("POST to /logs");
  if (isValid(request.body)) {
    logs.push(request.body);
    response.status(201).json(logs);
  } else {
    response
      .status(303)
      .json({ error: "Object contains invalid types of values" });
  }
});

// DELETE
routeLogs.delete("/:index", (request, response) => {
  console.log("DELETE to /:index");
  const { index } = request.params;
  const indexFound = logs.findIndex((log) => log.id == index)
  //-1 if not found
  if (indexFound) {
    // const [ deletedLog ] = logs.splice(index, 1)
    logs.splice(indexFound, 1);
    response.json(logs);
    // response.status(200).json(deletedBookmark)
  } else {
    response.redirect("/redirect");
  }
});

//UPDATE
routeLogs.put("/:index", (request, response) => {
  console.log("PUT to /:index");
  const { index } = request.params;
  const indexFound = logs.findIndex((log) => log.id == index)
  //First check if the object to update exists
  if (indexFound) {
    //Then update it
    if (isValid(request.body)) {
      logs[indexFound] = request.body;
      response.status(200).json(logs);
    } else {
      response
        .status(303)
        .json({ error: "Object contains invalid types of values" });
    }
  } else {
    response.redirect("/redirect");
  }
});

module.exports = routeLogs;
