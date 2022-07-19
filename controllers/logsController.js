const express = require("express");
const logs = express.Router();

const logsArray = require("../models/log.js");
const { validateURL } = require("../models/validations");

/*logs.get("/", (req, res) => {
    res.json(logsArray)
})*/

logs.get("/", (req, res) => {
  const { order } = req.query;
  if (order === "asc") {
    res.json(
      logsArray.sort((a, b) => {
        return a.daysSinceLastCrisis - b.daysSinceLastCrisis;
      })
    );
  }
  if (order === "desc") {
    res.json(
      logsArray.sort((a, b) => {
        return b.daysSinceLastCrisis - a.daysSinceLastCrisis;
      })
    );
  }
  res.json(logsArray)
});

logs.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (!logsArray[arrayIndex]) {
    res.redirect(404).send({error:"no log found - sorry"});
  } else {
    res.json(logsArray[arrayIndex]);
  }
});

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});

logs.delete("/:arrayIndex", (req, res) => {
  const {arrayIndex } =  req.params;
  const deletedlogs = logsArray.splice(arrayIndex, 1)
  res.status(200).json(deletedlogs)
});

logs.put("/:arrayIndex", (req, res) => {
  const {arrayIndex } =  req.params;
  logsArray[arrayIndex] = req.body
  res.status(200).json(logsArray[arrayIndex])
})
module.exports = logs;
