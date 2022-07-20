const express = require("express");
const logs = express.Router();

const logsData = require("../models/log.js");

// Index
logs.get("/", (req, res) => {
    res.json(logsData)
});

// Show
logs.get("/:id" , (req, res) => {
    const { id } = req.params;
    if(logsData[id]){
        res.json(logsData[id])
    } else {
        res.redirect("*")
    }
})

logs.post("/", (req, res) => {
    logsData.push(req.body);
    res.json(logsData[logsData.length - 1]);
});

logs.delete("/:arrayIndex", (req, res)=> {
    const {arrayIndex} = req.params
    const deletedlog = logsData.splice(arrayIndex, 1)
    res.status(200).json(deletedlog)
});

logs.put("/:arrayIndex", (req,res) => {
    const {arrayIndex} = req.params
    logsData[arrayIndex] = req.body
    res.status(200).json(logsData[arrayIndex])
});

module.exports = logs;