//Dependencies
const { request } = require("express");
const express = require("express");

//files
const captainLogArray = require("../models/logs");

//.Router creates a new controller that handles a sub-routes.
const logs = express.Router();

logs.get("/", (request, response) => {
  console.log("GET request to /logs");
  const { order, mistakes, lastCrisis } = request.query;
  if (order || mistakes || lastCrisis) {
    if (order === "asc") {
      captainLogArray.sort(function (a, b) {
        if (a.captainName.toLowerCase() < b.captainName.toLowerCase())
          return -1;
      });
      response.send(captainLogArray);
    } else if (order === "desc") {
      captainLogArray.sort(function (a, b) {
        if (a.captainName.toLowerCase() > b.captainName.toLowerCase())
          return -1;
      });
      response.send(captainLogArray);
    } else if (mistakes === "true") {
      let mistakeTrue = captainLogArray.filter(
        (obj) => obj.mistakesWereMadeToday === true
      );

      response.send(mistakeTrue);
    } else if (mistakes === "false") {
      console.log(mistakes);
      let mistakeTrue = captainLogArray.filter(
        (obj) => obj.mistakesWereMadeToday === false
      );

      response.send(mistakeTrue);
    } else if (lastCrisis === "gt10") {
      let daysLastCrisis = captainLogArray.filter(
        (obj) => obj.daysSinceLastCrisis > 10
      );

      response.send(daysLastCrisis);
    } else if (lastCrisis === "gte20") {
      console.log("gte20");
      let daysLastCrisis = captainLogArray.filter(
        (obj) => obj.daysSinceLastCrisis > 20
      );

      response.send(daysLastCrisis);
    } else if (lastCrisis === "lte5") {
      let daysLastCrisis = captainLogArray.filter(
        (obj) => obj.daysSinceLastCrisis <= 5
      );

      response.send(daysLastCrisis);
    }
  } else {
    response.send(captainLogArray);
  }
});
 
logs.get("/:arrayIndex", (request, response) => {
  const { arrayIndex } = request.params;
  console.log("GET request to /:arrayIndex");
  {
    captainLogArray[arrayIndex]
      ? response.json(captainLogArray[Number(arrayIndex)])
      : response.redirect("/*");
  }
});

//POST to /logs
logs.post("/", (request, response) => {
  console.log("GET request to /:post");
  // captainLogArray = [...captainLogArray, request.body]
  captainLogArray.push(request.body)
  response.json(captainLogArray)  

});


//Exports the bookmarks controller/router
//So that 'app can delegate the '/bookmarks' route to it
module.exports = logs;
