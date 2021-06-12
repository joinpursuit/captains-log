const express = require("express");
const logs = express.Router();
const logArray = require("../models/log")

logs.get("/", (req, res) => {
    const { order } = req.query
    console.log(req.query) // {order}
    if (order === "asc") {
        logArray.sort((a, b) => {
            if (a.captainName < b.captainName) { return -1; }
            if (a.captainName > b.captainName) { return 1; }
            return 0;
        })
    } else if (order === "desc") {
        logArray.sort((b, a) => {
            if (a.captainName < b.captainName) { return -1; }
            if (a.captainName > b.captainName) { return 1; }
            return 0;
        })
    }
    res.json(logArray)
})

logs.get("/:arrayIndex", (req, res) => {
    const arrayIndex = req.params.arrayIndex;
    if (logArray[arrayIndex]) {
        res.json(logArray[arrayIndex])
    } else {
        res.redirect("/404")
    }
})

logs.post("/", (req, res) => {
    console.log(req.body)
    logArray.push(req.body)
    res.json(logArray[logArray.length - 1])
    //res.redirect(`/logs/${logArray[logArray.length-1]}`)
})
logs.put("/:arrayIndex", (req, res) => {
    logArray[req.params.arrayIndex] = req.body;
    res.json(logArray[req.params.arrayIndex]);
});
logs.delete("/:indexArray", (req, res) => {
    const deletedLog = logArray.splice(req.params.indexArray, 1);
    res.json(deletedLog);
});

module.exports = logs