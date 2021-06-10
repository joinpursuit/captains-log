const logs = require("express").Router();
const logsArray = require("../models/log.js");

logs.get("/:arrayIndex", (req, res) => {
  console.log(req.params);
  const { arrayIndex } = req.params;
  if (logsArray[arrayIndex]) {
    res.json(logsArray[arrayIndex]);
  } else {
    res.redirect("/404");
  }
});

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.post("/", (req, res) => {
  res.json(logsArray.push(req.body));
  console.log(req.body)
})

module.exports = logs;
