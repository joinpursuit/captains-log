const express = require("express");
const req = require("express/lib/request");
const log = express.Router();
const logArr = require("../models/log.js");

log.get("/", (req, res) => {
  res.json(logArr);
});
//GET
log.get("/:id", (req, res) => {
  if(logArr[req.params.id]) {
    res.send(logArr[req.params.id])
  } else {
    res.redirect("/logs/:id")
  }
})
//POST
log.post("/", (req, res) => {
  logArr.push(req.body)
  res.json(logArr[logArr.length - 1])
})

//PUT
log.put("/:id", (req, res) => {
  const { id } = req.params
  if (logArr[id]) {
    logArr[id] = req.body;
    res.status(200).json(logArr[id])
  } else {
    res.status(404).json({error: "Not found"})
  }
 })

// DELETE
log.delete("/:id", (req, res) => {
  if (logArr[req.params.id]) {
    const deletedLog = logArr.splice(req.params.id, 1);
    res.status(200).json(deletedLog);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

module.exports = log;