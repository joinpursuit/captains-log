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

logs.delete("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    const deleteLog = logsData.splice(arrayIndex, 1);
    res.status(200).json(deleteLog)
});

logs.put("/:arrayIndex", (req,res) => {
    const {arrayIndex} = req.params
    logsData[arrayIndex] = req.body
    res.status(200).json(logsData[arrayIndex])
});

module.exports = logs