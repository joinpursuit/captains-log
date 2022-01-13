const express = require("express");
const app = require("../app");
//Files
const captainsLogArray = require("../models/log.js");

const captainsLog = express.Router();

captainsLog.post("/", (request, response) => {
  if (Object.keys(request.body).length) {
    captainsLogArray.push(request.body);
    response.status(200).json(captainsLogArray);
  } else response.status(404).json({ error: "site not found" });
});

captainsLog.get("/", (request, response) => {
  response.json(captainsLogArray);
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
    ? response
        .status(200)
        .json(
          captainsLogArray.splice(
            arrayIndex,
            1,
            captainsLogArray[arrayIndex]
          )[0]
        )
    : response.status(404).json({ error: "site not found" });
});

captainsLog.get("/:arrayIndex", (request, response) => {
  const { arrayIndex } = request.params;
  arrayIndex < captainsLogArray.length
    ? response.json(captainsLogArray[arrayIndex])
    : response.redirect("/");
});

module.exports = captainsLog;
