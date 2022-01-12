const express = require("express");
const app = require("../app");
//Files
const captainsLogArray = require("../models/log.js");

const captainsLog = express.Router();
// Routes
captainsLog.post("/", (request, response) => {
  if (Object.keys(request.body).length) {
    captainsLogArray.push(request.body);
    response.status(200).json(captainsLogArray);
  } else response.status(404).json({ error: "site not found" });
});
captainsLog.get("/", (request, response) => {
  const { order, mistakes, lastCrisis } = request.query;
  if (order === "asc") {
    const result = captainsLogArray.map((log) => log.post).sort();
    response.json(result.map((p) => captainsLogArray.find((log) => log.post === p)));
  }
  if (order === "desc") {
    const result = captainsLogArray
      .map((log) => log.post)
      .sort()
      .reverse();
    response.json(result.map((p) => captainsLogArray.find((log) => log.post === p)));
  }

  mistakes === "true" && response.json(captainsLogArray.filter((log) => log.mistakesWereMadeToday === true));
  mistakes === "false" && response.json(captainsLogArray.filter((log) => log.mistakesWereMadeToday === false));
  lastCrisis === "gt10" && response.json(captainsLogArray.filter((log) => log.daysSinceLastCrisis > 10));
  lastCrisis === "gte20" && response.json(captainsLogArray.filter((log) => log.daysSinceLastCrisis >= 20));
  lastCrisis === "lte5" && response.json(captainsLogArray.filter((log) => log.daysSinceLastCrisis <= 5));
  !order && response.json(captainsLogArray);
});

captainsLog.delete("/:arrayIndex", (request, response) => {
  const { arrayIndex } = request.params;
  captainsLogArray[arrayIndex]
    ? response.status(200).json(captainsLogArray.splice(arrayIndex, 1)[0])
    : response.status(404).json({ error: "site not found" });
});
captainsLog.put("/:arrayIndex", (request, response) => {
  const { arrayIndex } = request.params;
  captainsLogArray[arrayIndex]
    ? response.status(200).json(captainsLogArray.splice(arrayIndex, 1, captainsLogArray[arrayIndex])[0])
    : response.status(404).json({ error: "site not found" });
});

captainsLog.get("/:arrayIndex", (request, response) => {
  const { arrayIndex } = request.params;
  arrayIndex < captainsLogArray.length ? response.json(captainsLogArray[arrayIndex]) : response.redirect("/");
});

module.exports = captainsLog;
