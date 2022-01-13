// Dependencies
const express = require("express");
const { response } = require("../app");
const app = require("../app");

//Files
const logsArray = require("../models/log");

const logs = express.Router();
//display all logs in array, GET
logs.get("/", (req, res) => {
  console.log("Request for logs", req.query);
  const { order, mistakes, lastCrisis } = req.query;
  //   console.log(lastCrisis, "outside if");
  if (Object.keys(req.query).length > 0) {
    let filteredArray = logsArray.slice(0);
    //filter by last crisis
    if (lastCrisis) {
      //regex filter for numbers and just return first index with the leftover content
      let value = lastCrisis.match(/(\d+)/)[0];
      //regex filter for letters, wasn't getting desired output with match
      let letters = lastCrisis.replace(/[^a-z]/gi, "");
      //   console.log(letters, value);
      switch (letters) {
        case "lte":
          filteredArray = filteredArray.filter((item) => {
            return item.daysSinceLastCrisis <= value;
          });
          break;
        case "lt":
          filteredArray = filteredArray.filter((item) => {
            return item.daysSinceLastCrisis < value;
          });
          break;
        case "gte":
          filteredArray = filteredArray.filter((item) => {
            return item.daysSinceLastCrisis >= value;
          });
          break;
        case "gt":
          filteredArray = filteredArray.filter((item) => {
            return item.daysSinceLastCrisis > value;
          });
          break;
        default:
          break;
      }
    }
    //filter by last mistake
    switch (mistakes) {
      case "true":
        // console.log("true switch");
        filteredArray = filteredArray.filter((item) => {
          return item.mistakesWereMadeToday === true;
        });
        break;
      case "false":
        filteredArray = filteredArray.filter((item) => {
          return item.mistakesWereMadeToday === false;
        });
        break;
      default:
        break;
    }
    //sort by title if order
    switch (order) {
      case "asc":
        filteredArray.sort((a, b) => {
          let keyA = a.title;
          let keyB = b.title;
          return keyA > keyB ? 1 : keyA < keyB ? -1 : 0;
        });
        break;
      case "desc":
        filteredArray.sort((a, b) => {
          let keyA = a.title;
          let keyB = b.title;
          return keyA > keyB ? -1 : keyA < keyB ? 1 : 0;
        });
        break;
      default:
        break;
    }
    res.json(filteredArray);
  } else {
    res.json(logsArray);
  }
});

//view specific log, GET
logs.get("/:id", (request, response) => {
  const { id } = request.params;
  //   console.log(`Pulling log ${id}`);
  logsArray[id]
    ? response.json(logsArray[id])
    : // : response.status(404).json({ error: "Index not found" });
      response.redirect("/logs");
});
// Moved function outside of POST for update
function logValidater(obj) {
  if (typeof obj.captainName !== "string") {
    return false;
  }
  if (typeof obj.title != "string") {
    console.log("title");
    return false;
  }
  if (typeof obj.post != "string") {
    console.log("post");
    return false;
  }
  if (typeof obj.mistakesWereMadeToday != "boolean") {
    console.log("mistakes");
    return false;
  }
  if (typeof obj.daysSinceLastCrisis != "number") {
    console.log("days");
    return false;
  }
  console.log("valid entry");
  return true;
}
// Create new log, POST
logs.post("/", (request, response) => {
  console.log("Creating new log");
  if (logValidater(request.body)) {
    logsArray.push(request.body);
    response.status(201).json(logsArray);
  } else {
    response.status(400).json({ error: "Invalid data type entered" });
  }
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
  if (logValidater(request.body)) {
    if (logsArray[id]) {
      logsArray[id] = request.body;
      response.status(200).json(logsArray);
    } else {
      response.status(404).json({ error: "index not found" });
    }
  } else {
    response.status(400).json({ error: "Invalid data type entered" });
  }
});

module.exports = logs;
