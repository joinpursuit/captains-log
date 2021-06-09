const express = require("express");
const log = express.Router();
const logsArray = require("../models/log.js")









log.get("/log", (req, res) => {
    res.json(logsArray)
})
log.get("/:index", (req,res) => {
    const { index } = req.params;
    if(logsArray[index]) {
        res.status(200).json(logsArray[index - 1]);
    } else {
        res.redirect("/404")
    }
})


module.exports = log