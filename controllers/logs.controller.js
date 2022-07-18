const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

logs.get("/", (req, res) => {
  const { order } = req.query;
  const logsArrayCopy = [...logsArray];

  if (order) {
    if (order === "asc") {
      res.send(
        logsArrayCopy.sort((a, b) => {
          if (a.captainName < b.captainName) {
            return -1;
          }
          if (a.captainName > b.captainName) {
            return 1;
          }
          return 0;
        })
      );
    } else if (order === "desc") {
      res.send(
        logsArrayCopy.sort((a, b) => {
          if (a.captainName < b.captainName) {
            return 1;
          }
          if (a.captainName > b.captainName) {
            return -1;
          }
          return 0;
        })
      );
    }
  } else {
    res.send(logsArray);
  }
});

logs.get("/:id", (req, res) => {
  if (logsArray[req.params.id]) {
    res.json(logsArray[req.params.id]);
  } else {
    res.status(404).redirect("/error");
  }
});

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.send(logsArray[logsArray.length - 1]);
});

logs.delete("/:id", (req, res) => {
  if (logsArray[req.params.id]) {
    logsArray.splice(req.params.id, 1);
    res.send("log deleted");
  } else {
    res.status(404).redirect("/error");
  }
});

module.exports = logs;
