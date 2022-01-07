const express = require("express");
const logRoutes = express.Router();
const logArr = require("../models/log.js");

logRoutes.get("/", (req, res)=>{
    res.json(logArr);
})

module.exports = logRoutes;