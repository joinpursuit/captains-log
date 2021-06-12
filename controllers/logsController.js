const logs = require("express").Router();
const logsArray = require("../models/log.js");

logs.get("/:arrayIndex", (req, res) => {
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
  const { body } = req;
  res.json(logsArray.push(body));
});

// logs.put("/:arrayIndex", (req, res) => {
//   const { arrayIndex } = req.params;
//   const { body } = req;
//   logsArray[arrayIndex] = body
//   res.json(logsArray)
// });

logs.delete("/:arrayIndex", (req, res) => {
  const {arrayIndex} = req.params;
  const deleted = logsArray.splice(arrayIndex,1);
  res.json(deleted[0])
});

module.exports = logs;
