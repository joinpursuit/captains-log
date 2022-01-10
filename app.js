//DEPENDENCIES 
const express = require("express");
const logs = require("./models/log")
const { sortAsc, sortDesc } = require("./helpers/functions");

//CONFIGURATION 
const app = express();

//ROUTES & CALLBACK
app.get("/", (request, response) => {
    console.log("GET request received to route: /")
    response.send("Welcome to the captain's log")
});

//GET LIST OF ALL LOGS, including queries
app.get("/logs", (request, response) => {
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
app.get("/logs/:index", (request, response) => {
    console.log("GET request received to route: /logs/:index")
    const { index } = request.params
    if (logs[index]) {
        response.json(logs[index])
    } else {
        response.redirect("*")
    }
})

// CREATE 404 route (WITH *, ORDER MATTERS, so have redirects below all other routes)
app.get("*", (request, response) => {
    response.status(404).json({error: "Page not found"})
})

//EXPORT
module.exports = app;