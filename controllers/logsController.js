const express = require("express");
const logs = express.Router();

const logsArray = require("../models/logs.js");
//  CREATE ROUTE
logs.post("/", (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1])
})
// SHOW ROUTE
logs.get("/:arrayIndex", (req, res) => {
    const {arrayIndex} = req.params;
    if (logsArray[arrayIndex]) {
        res.json(logsArray[arrayIndex]);
    } else {
        res.status(404).json({error: "page not found"});
    }
});
//  DELETE ROUTE

logs.delete("/:arrayIndex", (req, res) => {
 const {arrayIndex} = req.params;
 const deleteLogs = logsArray.splice(arrayIndex, 1);
 res.status(200).json(deleteLogs)
})
// UPDATE ROUTE
logs.put("/:arrayindex", (req, res) => {
    const {arrayIndex} = req.params;
    logsArray[arrayIndex] = req.body;
    res.status(200).json(logsArray[arrayIndex])
})

module.exports = logs;