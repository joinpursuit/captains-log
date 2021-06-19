const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

// const validateUrl = (req, res, next) => {
//   const http = "http://";
//   const https = "https://";
//   if (req.url.substring(0, 7) === http || req.url.substring(0, 8) === https) {
//     return next();
//   } else {
//     res
//       .status(404)
//       .send(`Invalid URL! You are missing either ${http} or ${https}`);
//   }
// };

// logs.use(validateUrl);

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.post("/logs", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});

logs.get("/:arrayIndex", (req, res) => {
  let arrayIndex = Number(req.params.arrayIndex);
  if (arrayIndex < logsArray.length) {
    res.json(logsArray[arrayIndex]);
  } else {
    res.redirect("/404");
  }
});

logs.delete("/:arrayIndex", (req, res) => {
  let arrayIndex = Number(req.params.arrayIndex);
  const deletedLog = logsArray.splice(arrayIndex, 1);
  if (arrayIndex < logsArray.length) {
    res.status(200).json(deletedLog);
  } else {
    res.redirect("/404");
  }
});

logs.put("/:arrayIndex", (req, res) => {
  logsArray[Number(req.params.arrayIndex)] = req.body;
  if (arrayIndex < logsArray.length) {
    res.status(200).json(logsArray[Number(req.params.arrayIndex)]);
  } else {
    res.redirect("/404");
  }
});

module.exports = logs;
