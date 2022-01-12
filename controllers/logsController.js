const express = require("express");
const logsRoute = express.Router();
const logsData = require("../models/logs.js");

logsRoute.get("/", (req, res)=> {
  res.json(logsData);
});




module.exports = logsRoute;