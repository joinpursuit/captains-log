//Dependencies
const express = require("express");
const { check, validationResult } = require("express-validator");
// console.log(check);

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
  console.log("GET request to /:index");
  {
    captainLogArray[arrayIndex]
      ? response.json(captainLogArray[Number(arrayIndex)])
      : response.redirect("/*");
  }
});

//POST to /logs with input field validation
/**
 * @api {post} /logs Create captain object
 * @apiParam {String} [captainName] captainName
 * @title {String} [title] title
 * @post {String} [post] post
 * @mistakesWereMadeToday {boolean} [mistakesWereMadeToday] mistakesWereMadeToday
 * @daysSinceLastCrisis  {number} [daysSinceLastCrisis] daysSinceLastCrisis
 * @apiSuccess (201) {Object} object
 */

logs.post(
  "/",
  [
    check("captainName", "captainName is required").not().isEmpty(),
    check("title", "Title is required").notEmpty(),
    check("post", "post is not valid").optional(),
    check(
      "mistakesWereMadeToday",
      "mistakesWereMadeToday is required (true/false)"
    ).isBoolean(),
    check("daysSinceLastCrisis", "daysSinceLastCrisis ").isInt(),
  ],
  (request, response) => {
    console.log("GET request to /:posted");
    console.log(request.body);
   
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(422).json(`{${errors.array()} check that all fields have inputs and correct entries}`);
    } else {
      captainLogArray.push(request.body);
      response.status(201).json(captainLogArray);
    }
  }
);

//delete object using the id
logs.delete("/:id", (request, response) => {
  console.log("GET request to /:deleted");
  const { id } = request.params;
  if (captainLogArray[id]) {
    captainLogArray.splice(id, 1);
    response.status(200).json(deletedLog[0]);
  } else {
    response.status({error: "Couldn't replace the log"})
  }
});

// updating
logs.put("/:arrayIdx", (request, response) => {
  console.log("GET request to /:edited");
  const { arrayIdx } = request.params
  if( captainLogArray[arrayIdx]){
 captainLogArray[arrayIdx] = request.body;
  response.status(200).json(captainLogArray[arrayIdx])
  } else {
    response.status({error: "Couldn't replace the log"}) 
  }
 
})


// curl PUT  http://localhost:3003/logs 'content-type: application/x-www-form-urlencoded' 'id=id'

//Exports the bookmarks controller/router
//So that 'app can delegate the '/bookmarks' route to it
module.exports = logs;
