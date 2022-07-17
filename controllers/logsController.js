const express = require("express");
const logs = express.Router();

const logsData = require("../models/log.js");
logs.get("/", (req, res) => {
    res.json(logsData);
});
logs.get("/:arrayIndex", (req, res) => {
    console.log(req.params);
    const { arrayIndex } = req.params;
    if (logsData[arrayIndex]) {
        res.json(logsData[arrayIndex])
    } else {
       res.redirect("/logs");
    } 
})

logs.post("/", (req, res) => {
    logsData.push(req.body);
    res.json(logsData[logsData.length - 1]);
});


module.exports = logs