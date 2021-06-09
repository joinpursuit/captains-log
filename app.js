const express = require("express")
const app = express()
const logsController = require("./controllers/logsController")

app.use("/logs", logsController)

app.get("/", (req,res) => {
    res.send("Welcome to the Captain's Log")
})

module.exports = app