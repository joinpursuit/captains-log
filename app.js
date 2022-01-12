const express = require("express")
const app = express()
const logsArray = require("./models/log") 
const logsController = require("./controllers/logsController")

app.use("/logs", logsController)

app.get("/", (request, response) => {
    response.send("Welcome to the Captain's Log App")
})

app.get("/logs", (request, response) => {
    response.send(logsArray)
})

app.get("/logs/:arrayIndex", (request, response) => {
    const { arrayIndex } = request.params
    logsArray[arrayIndex]
    ? response.send(logsArray[arrayIndex])
    : response.redirect()
})

module.exports = app