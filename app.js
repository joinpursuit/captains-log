//DEPENDENCIES 
const express = require("express");
const logs = require("./models/log")

//CONFIGURATION 
const app = express();

//ROUTES & CALLBACK
app.get("/", (request, response) => {
    console.log("GET request received to route: /")
    response.send("Welcome to the captain's log")
});

app.get("/logs", (request, response) => {
    console.log("GET request received to route: /logs")
    response.send(logs)
});

//EXPORT
module.exports = app;