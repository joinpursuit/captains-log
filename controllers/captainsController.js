//DEPENDENCIES
const express = require("express");
const logsArray = require("../models/log.js");

//CONFIGURATION
const logs = express.Router();

//ROUTES

//Index Route
logs.get("/", (req, res) => {
    res.json(logsArray);
});


//Show Route
logs.get("/:arrayIndex", (req, res, next) => {
    if(logsArray[req.params.arrayIndex]){
        res.json(logsArray[req.params.arrayIndex]);
        next();
    }else{
        res.redirect("/404");
    }
})


//Create Route
logs.post("/", (req, res, next) => {
    
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1]);
    
    next();
})

//Update Route
logs.put("/:arrayIndex", (req, res) => {
    logsArray[req.params.arrayIndex] = req.body;
    res.status(200).json(logsArray[req.params.arrayIndex]);
})

//Destroy Route
logs.delete("/:arrayIndex", (req, res) => {
    const deletedItem = logsArray.splice(req.params.arrayIndex, 1);
    res.status(200).json(deletedItem);
})

//EXPORT
module.exports = logs;