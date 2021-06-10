const express = require("express")
const app = express()
const logController = require("./controllers/logController")


// For any route that starts with /logs, we are going to 'use()' the logController
app.use("/logs", logController)


app.get("/", (req, res) => {
    res.send("Welcome to the Captain's Log")
})
app.get("*", (req, res) => {
    res.status(404).send("404: page not found")
})

module.exports = app