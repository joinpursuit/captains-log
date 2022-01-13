const express = require("express");
const logs = express.Router();
const logArray = require("../models/log");

logs.get("/", (request, response) => {
    response.json(logArray);
});

logs.get("/:id", (request, response) => {
    const { id } = request.params;
    if(logArray[id]){
        response.send(logArray[id]);
    } else {
        response.redirect("*");
    }
});

logs.post("/", (request, response) => {
    logArray.push(request.body);
    response.json(logArray[logArray.length-1]);
});

logs.delete("/:id", (request, response) => {
    const { id } = request.params;
    const deletedLog = logArray.splice(id, 1);
    response.status(200).json(deletedLog);
});

module.exports = logs;