const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

const validateUrl = (req, res, next) => {
  const http = "http://";
  const https = "https://";
  var fullUrl = req.protocol + "://" + req.get("host") + req.url;
  console.log(`[development] Request URL: ${fullUrl}`);
  if (fullUrl.substring(0, 7) === http || fullUrl.substring(0, 8) === https) {
    return next();
  } else {
    res
      .status(400)
      .send(`Oops, you forgot to start your url with http:// or https://`);
  }
};

logs.use(validateUrl);

logs.get("/", (req, res) => {
  res.status(200).json(logsArray);
});

logs.get("/:index", (req, res) => {
  const { index } = req.params;
  if (logsArray[index]) {
    res.status(200).json(logsArray[index]);
  } else {
    res.redirect("/404");
  }
});

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});

logs.put("/:index", (req, res) => {
  const { index } = req.params;

  if (logsArray[index]) {
    logsArray[index] = req.body;
    res.json(logsArray[index]);
  } else {
    res.redirect("/404");
  }
});

logs.delete("/:index", (req, res) => {
  const { index } = req.params;

  if (logsArray[index]) {
    const deleted = logsArray.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.redirect("/404");
  }
});

module.exports = logs;
