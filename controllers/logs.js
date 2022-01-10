const express = require("express");
const logs = express.Router();

const logArray = require("../models/log");

logs.get("/", (req, res) => {
  console.log("Get request to /logs");
  console.log(req.query);
  const { order } = req.query;
  if (req.originalUrl === "/logs") {
    res.send(logArray);
  } else {
    const arr = [...logArray];
    if (!!order) {
      arr.sort((a, b) => {
        (a = a.captainName.toUpperCase()), (b = b.captainName.toUpperCase());
        return a === b ? 0 : a > b ? 1 : -1;
      });
    }
    res.send(arr);
  }
});

logs.get("/:arrayIndex", (req, res) => {
  console.log("Get request to /arrayIndex");
  const { arrayIndex } = req.params;
  if (logArray[Number(arrayIndex)]) {
    res.send(logArray[Number(arrayIndex)]);
  } else {
    res.redirect("/*");
  }
});

module.exports = logs;
