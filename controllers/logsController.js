const logs = require("express").Router();
const logsArray = require("../models/log.js");

logs.get("/", (req, res) => {
  res.json(logsArray);
});


logs.get("/:arrayIdx", (req, res) => {
  const log = logsArray[req.params.arrayIdx]
  if(log) {
    res.json(log);
  } else {
    res.redirect('/404');
  }gi 

})


module.exports = logs;