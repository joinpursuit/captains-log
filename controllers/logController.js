const express = require("express");
const logs = express.Router();
const logArray = require("../models/log");

logs.get("/", (req, res) => {
    res.json(logArray);
});

logs.get("/:id", (req, res) => {
    const { id } = req.params;
    if(logArray[id]){
        res.send(logArray[id]);
    } else {
        res.redirect("*");
    }
});

logs.post("/", (req, res) => {
    logArray.push(req.body);
    res.json(logArray[logArray.length-1]);
});

logs.delete("/:id", (req, res) => {
    const deletedLog = logArray.splice(req.params.id, 1);
    res.status(200).json(deletedLog);
});

module.exports = logs;