const express = require("express");
const logs = express.Router();

const logsData = require("../models/log.js");
const { validateURL } = require("../models/validations.js")

logs.get("/", (req, res) => {
    res.json(logsData)
})

//SHOW ROUTE
logs.get("/:index", (req, res) => {
    const { index } = req.params;
    if(logsData[index]){
        res.json(logsData[index])
    }else{
        res.status(302).send("Error - redirect")
    }
})

//CREATE ROUTE
logs.post("/", validateURL, (req, res) => {
    logsData.push(req.body);
    res.json(logsData[logsData.length - 1]);
});

//UPDATE ROUTE
logs.put("/:index", (req,res) => {
    const { index } = req.params;
    logsData[index] = req.body;
    res.status(200).json(logsData[index])
});

//DELETE ROUTE
logs.delete("/:index", (req, res)=> {
    const { index } = req.params;
    const deletedLog = logsData.splice(index, 1)
    res.status(200).json(deletedlog)
});

module.exports = logs;
