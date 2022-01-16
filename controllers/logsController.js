const express = require("express");
const logs = express.Router();
const logsArray = require("../models/logs.js");

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.get("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    res.json(logsArray[index]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});

logs.delete("/:index", (req, res) => {
  const {index} = req.params
  if(logsArray[index]) {
    const deletedLog = logsArray.splice(index, 1)
    res.status(200).json(deletedLog)
  } else {
    res.status(404).json({error: "Not Found"})
  }
})

logs.put("/:index", (req, res) => {
  const {index} = req.params
  if(logsArray[index]) {
    logsArray[index] = req.body
    res.status(200).json(logsArray(index))
  } else {
    res.status(404).json({error: "Not Found"})
  }
})

module.exports = logs;
