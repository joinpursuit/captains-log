// DEPENDENCIES
const express = require("express");

// MIDDLEWARE AND ROUTE
const logRoutes = express.Router();
const logsArr = require("../models/log.js");

// /logs
logRoutes.get("/", (req, res) => {
  res.json(logsArr);
});



// /logs/1
logRoutes.get("/:index", (req, res)=>{
  const { index } = req.params
  if(logsArr[index]){
    res.json(logsArr[index]);
  } else {
    res.redirect("/*");
  }
});

// Updates
logRoutes.put("/:index", (req, res) => {
  const { index } = req.params
  logsArr[index] = req.body
  res.json(logsArr[index])
})

// /logs
logRoutes.post("/", (req, res)=>{
  logsArr.push(req.body);
  res.json(logsArr[logsArr.length-1]);
})

// DELETE
logRoutes.delete("/:index", (req, res) => {
  const { index } = req.params;
  if(logsArr[index]){
    let removed = logsArr.splice(index, 1);
    res.json(removed[0]);
  } else {
    res.status(404).json({error: "Not found"});
  }
});

module.exports = logRoutes;