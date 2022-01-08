//Dependencies
const express = require("express");
// const PORT = require('./P')
//files
const captainLogArray = require("../models/logs");

//.Router creates a new controller that handles a sub-routes.
const logs = express.Router();
// const add = express.Router()

logs.get("/", (request, response) => {
  console.log("GET request to /logs");
  response.json(captainLogArray);
});

logs.get("/:arrayIndex", (request, response) => {
  const { arrayIndex } = request.params;
  
  console.log("GET request to /:arrayIndex")
  (captainLogArray[arrayIndex])
    ? response.json(captainLogArray[Number(arrayIndex)])
    : response.redirect("http://localhost:3003");
});

//Exports the bookmarks controller/router
//So that 'app can delegate the '/bookmarks' route to it
module.exports = logs;
