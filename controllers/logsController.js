const express = require("express");
const logs = express.Router();
const logsData = require("../models/logs.js");


//  CREATE 
logs.post("/", (req, res) => {
    if (logsData) {
        logsData.push(req.body);
        res.json(logsData[logsData.length - 1]);
    } else {
        res.redirect("/*")
    }
})

// SHOW
logs.get("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    if (logsData[arrayIndex]) {
        res.json(logsData[arrayIndex])
    } else {
        res.redirect("/*")
    } 
})

// DESTROY
logs.delete("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    if (logsData[arrayIndex]) {
        const deletedLog = logsData.splice(arrayIndex, 1);
        res.status(200).json(deletedLog);
    } else {
        res.redirect("/*");
    } 
})

// UPDATE 
logs.put("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    if (logsData[arrayIndex]) {
        logsData[arrayIndex] = req.body;
        res.status(200).json(logsData[arrayIndex]);
    } else {
        res.redirect("/*");
    }
})


module.exports = logs