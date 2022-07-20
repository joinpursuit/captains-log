const express = require("express");
const logs = express.Router();
const logsArray = require("../models/logs.js");

logs.get("/", (req, res) => {
  res.json(logsArray);
});
logs.get("/:id", (req, res) => {
    const { id } = req.params;
    if (logsArray[id]) {
      res.send(logsArray[id]);
    } else {
      res.redirect("*");
    }
  });
  
  logs.post("/", (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1]);
  });
  logs.delete("/:id", (req, res)=> {
    const {id} = req.params
    const deletedLogs = logsArray.splice(id, 1)
    res.status(200).json(deletedLogs)
});
logs.put("/:id", (req,res) => {
    const {id} = req.params
    logsArray[id] = req.body
    res.status(200).json(logsArray[id])
});



  module.exports = logs