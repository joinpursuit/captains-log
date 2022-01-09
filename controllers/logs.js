const express = require("express");
const logs = express.Router()

const logArray = require("../models/log");

logs.get("/", (req, res) => {
    console.log("Get request to /logs")
    res.send(logArray)
});

logs.get("/:arrayIndex", (req, res) => {
    console.log("Get request to /arrayIndex")
    const { arrayIndex } = req.params;
    if(logArray[Number(arrayIndex)]) {
        res.send(logArray[Number(arrayIndex)])
    } else {
        res.redirect("/*")
    }
});

logs.get("/logs?order=asc", (req, res) => {
    console.log("You should be in order")
    logArray.sort((x, y) => {
        let a = a.captainName.toUpperCase(),
            b = b.captainName.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1
    })
    res.send(logArray)
})



module.exports = logs;