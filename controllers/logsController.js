const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.get("/:arrayIndex", (req, res) => {
  if (logsArray[req.params.arrayIndex]) {
    res.json(logsArray[req.params.arrayIndex]);
  } else {
    res.redirect("/404");
  }
});

logs.post("/", (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1]);
});

logs.delete("/:arrayIndex", (req,res) => {
    const deletedLog = logsArray.splice(req.params.arrayIndex, 1)
    res.json(deletedLog)
})


module.exports = logs;
