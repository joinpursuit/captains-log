//DEPENDENCIES
const express = require("express");
const routeLogs = express.Router()

//FILES
const logs = require("../models/log")
const { sortAsc, sortDesc } = require("../helpers/functions");

//ROUTES

//GET LIST OF ALL LOGS, including queries
routeLogs.get("/", (request, response) => {
    console.log("GET request received to route: /logs")
    const { order, mistakes, lastCrisis } = request.query        
    if (order?.toLowerCase() === "asc") {
        response.json(sortAsc(logs))
    } else if (order?.toLowerCase() === "desc") {
        response.json(sortDesc(logs))
    } else if (mistakes?.toLowerCase() === "true") {
        response.json(logs.filter((log) => log.mistakesWereMadeToday === true))
    } else if (mistakes?.toLowerCase() === "false") {
        response.json(logs.filter((log) => log.mistakesWereMadeToday === false))
    } else if (lastCrisis?.toLowerCase() === "gt10") {
        response.json(logs.filter((log) => log.daysSinceLastCrisis > 10))
    } else if (lastCrisis?.toLowerCase() === "gte20") {
        response.json(logs.filter((log) => log.daysSinceLastCrisis >= 20))
    } else if (lastCrisis?.toLowerCase() === "lte5") {
        response.json(logs.filter((log) => log.daysSinceLastCrisis <= 5))
    } else {
        response.json(logs)
    }
});

//GET individual view, show one log or redirect if not found
routeLogs.get("/:index", (request, response) => {
    console.log("GET request received to route: /logs/:index")
    const { index } = request.params
    if (logs[index]) {
        response.json(logs[index])
    } else {
        response.redirect("/redirect")
    }
})

//POST 
routeLogs.post("/", (request, response) => {
    console.log("POST to /logs")
    logs.push(request.body);
    response.status(303).json(logs)
})

// DELETE
routeLogs.delete("/:index", (request, response) => {
    console.log("DELETE to /:index")
    const { index } = request.params
    if(logs[index]) {
        const [ deletedLog ] = logs.splice(index, 1)
        response.status(200).json(logs)
        // response.status(200).json(deletedBookmark)
    } else {
        response.redirect("/redirect")
    }  
})

//UPDATE
routeLogs.put("/:index", (request, response) => {
    const { index } = request.params;
    //First check if the object to update exists
    if (logs[index]) {
        //Then update it
        logs[index] = request.body
        response.status(200).json(logs)
    } else {
        response.redirect("/redirect")
    }
})

module.exports = routeLogs;