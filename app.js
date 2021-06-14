const express = require("express")
const app = express()

app.use(express.json())

const logsController = require("./controllers/logsController.js");

app.get("/", (req, res) => {
    res.send("Welcome to the Captain's Log")
})

app.use("/logs", logsController)

app.get("*", (req, res) => {
    res.status(404).send("Page Not Found!")
}) 

module.exports = app;