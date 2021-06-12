const logs = require("express").Router();
const logsArray = require("../models/log.js");

const checkTypes = (req, res) => {
  if (
    typeof req.captainName === "string" &&
    typeof req.title === "string" &&
    typeof req.post === "string" &&
    typeof req.mistakesWereMadeToday === "boolean" &&
    typeof req.daysSinceLastCrisis === "number"
  ) {
    return true;
  } else {
    res.status(400).send("One of the parameters you have entered is invalid");
  }
};
// Creates a new entry
logs.post("/", (req, res) => {
  const isTrue = checkTypes(req.body, res);
  if (isTrue === true) {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1]);
  }
});

// Deletes a specific entry
logs.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (logsArray[id]) {
    const deletedLog = logsArray.splice(id, 1);
    res.status(204).json(deletedLog);
  } else {
    res.redirect("/404");
  }
});

// Updates a specific entry
logs.put("/:id", (req, res) => {
  const { id } = req.params;
  if (logsArray[id]) {
    const isTrue = checkTypes(req.body, res);
    if (isTrue === true) {
      logsArray[id] = req.body;
      res.status(200).json(logsArray[id]);
    }
  } else {
    res.redirect("/404");
  }
});

// Shows a specific entry
logs.get("/:id", (req, res) => {
  const { id } = req.params;
  if (logsArray[id]) {
    res.json(logsArray[id]);
  } else {
    res.redirect("/404");
  }
});

logs.get("/", (req, res) => {
  const { order, mistakes, lastCrisis } = req.query;

  // takes in the lastCrisis user input and checks for what number
  // user wants to check by
  let numberCheck;
  if (lastCrisis) {
    const lastCrisisArray = lastCrisis.split("");
    numberCheck = Number(
      lastCrisisArray
        .filter((lc) => {
          return !isNaN(lc) === true;
        })
        .join("")
    );
  }

  // query string /logs? to specificy search by inner object criteria
  if (order === "asc") {
    res.json(
      logsArray.sort((a, b) => {
        let nameA = a.captainName;
        let nameB = b.captainName;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    );
  } else if (order === "desc") {
    res.json(
      logsArray.sort((a, b) => {
        let nameA = a.captainName;
        let nameB = b.captainName;
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      })
    );
  } else if (mistakes === "true") {
    res.json(
      logsArray.filter((log) => {
        return log.mistakesWereMadeToday === true;
      })
    );
  } else if (mistakes === "false") {
    res.json(
      logsArray.filter((log) => {
        return log.mistakesWereMadeToday === false;
      })
    );
  } else if (lastCrisis && lastCrisis.includes("gte")) {
    res.json(
      logsArray.filter((log) => {
        return log.daysSinceLastCrisis >= numberCheck;
      })
    );
  } else if (lastCrisis && lastCrisis.includes("gt")) {
    res.json(
      logsArray.filter((log) => {
        return log.daysSinceLastCrisis > numberCheck;
      })
    );
  } else if (lastCrisis && lastCrisis.includes("lte")) {
    res.json(
      logsArray.filter((log) => {
        return log.daysSinceLastCrisis <= numberCheck;
      })
    );
  } else if (lastCrisis && lastCrisis.includes("lt")) {
    res.json(
      logsArray.filter((log) => {
        return log.daysSinceLastCrisis < numberCheck;
      })
    );
  } else {
    res.json(logsArray);
  }
});

module.exports = logs;
