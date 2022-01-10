const express = require("express")
const app = express()
const logsArray = require("./models/log") 

app.get("/", (request, response) => {
    response.send("Welcome to the Captain's Log App")
})

app.get("/logs", (request, response) => {
    response.send(logsArray)
})

module.exports = app