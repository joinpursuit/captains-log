const { request, query } = require('express');
const express = require('express');
const logsArray = require("../models/log");

const logs = express.Router();

logs.post("/", (request, response) => {
    if (Object.keys(request.body).length) {
    logsArray.push(request.body);
    response.status(200).json(logsArray);
    } else response.status(404).json({ error: "site not found" });
});

logs.get("/", (request, response) => {
    const { lastCrisis } = request.query;
    console.log(lastCrisis);
    lastCrisis === "gt10" && response.json(logsArray.filter((log) => log.daysSinceLastCrisis > 10));
    });
    
logs.get("/", (request, response) => {
    response.json(logsArray);
});


logs.get("/:index", (request, response) => {
    const { index } = request.params;
    console.log(logsArray[index]);
    index < logsArray.length ? response.json(logsArray[index]) : response.redirect("/");
});

logs.delete("/:index", (request, response) => {
    const { index } = request.params;
    response.json(logsArray.splice(index, 1));
});




module.exports = logs;
