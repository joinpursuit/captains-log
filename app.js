const express = require("express")
const app = express()
const logsArray = require("./models/log") 

app.get("/", (request, response) => {
    response.send("Welcome to the Captain's Log App")
})

module.exports = app