//DEPENDENCIES
const express = require("express");
const logsRouter = express.Router();

//FILES 
const logs = require("../../models/log");
const { sortAsc, sortDesc, isValid, formatLog, formatLinks } = require("../../helpers/functions");

//ROUTES

//GET LIST OF ALL LOGS, including queries
logsRouter.get("/", (request, response) => {
    console.log("GET request received to route: /logs")
    const { order, mistakes, lastCrisis } = request.query        
    if (order?.toLowerCase() === "asc") {
        response.send(formatLinks(sortAsc(logs)))
    } else if (order?.toLowerCase() === "desc") {
        response.send(formatLinks(sortDesc(logs)))
    } else if (mistakes?.toLowerCase() === "true") {
        response.send(formatLinks(logs.filter((log) => log.mistakesWereMadeToday === true)))
    } else if (mistakes?.toLowerCase() === "false") {
        response.send(formatLinks(logs.filter((log) => log.mistakesWereMadeToday === false)))
    } else if (lastCrisis?.toLowerCase() === "gt10") {
        response.send(formatLinks(logs.filter((log) => log.daysSinceLastCrisis > 10)))
    } else if (lastCrisis?.toLowerCase() === "gte20") {
        response.send(formatLinks(logs.filter((log) => log.daysSinceLastCrisis >= 20)))
    } else if (lastCrisis?.toLowerCase() === "lte5") {
        response.send(formatLinks(logs.filter((log) => log.daysSinceLastCrisis <= 5)))
    } else {
        response.send(formatLinks(logs))
    }
});

//GET individual view, show one log or redirect if not found
logsRouter.get("/:index", (request, response) => {
    console.log("GET request received to route: /logs/:index")
    const { index } = request.params
    if (logs[index]) {
        response.send(formatLog(logs[index]))
    } else {
        response.redirect("/redirect")
    }
})

//POST 
logsRouter.post("/", (request, response) => {
    console.log("POST to /logs")
    if (isValid(request.body)) {
        logs.push(request.body);
        response.status(303).send(formatLinks(logs))
    } else {
        response.status(303).json({error: "Object contains invalid types of values"})
    }
})

// DELETE
logsRouter.delete("/:index", (request, response) => {
    console.log("DELETE to /:index")
    const { index } = request.params
    if(logs[index]) {
        const [ deletedLog ] = logs.splice(index, 1)
        response.status(200).send(formatLinks(logs))
        // response.status(200).json(deletedBookmark)
    } else {
        response.redirect("/redirect")
    }  
})

//UPDATE
logsRouter.put("/:index", (request, response) => {
    const { index } = request.params;
    //First check if the object to update exists
    if (logs[index]) {
        //Then update it
        if (isValid(request.body)) {
            logs[index] = request.body
            response.status(200).send(formatLinks(logs))
        } else {
            response.status(303).json({error: "Object contains invalid types of values"})
        }
    } else {
        response.redirect("/redirect")
    }
})


module.exports = logsRouter;
