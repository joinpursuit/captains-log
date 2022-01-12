const express = require("express")
const app = express()
const logsArray = require("./models/log") 
const logsController = require("./controllers/logsController")

app.use("/logs", logsController)

app.get("/", (request, response) => {
    response.send("Welcome to the Captain's Log App")
})

app.get("*", (request, response) => {
    response.status(404).send("Not Found")
})

module.exports = app