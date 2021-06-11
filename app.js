const express = require("express")
const app = express()
const logController = require("./controllers/logController")
app.use(express.json()) // This tells express to parse the json code, otherwise our CREATE route will append a null value


// For any route that starts with /logs, we are going to 'use()' the logController
app.use("/logs", logController)


app.get("/", (req, res) => {
    res.send("Welcome to the Captain's Log")
})
app.get("*", (req, res) => {
    res.status(404).send("404: page not found")
})

module.exports = app