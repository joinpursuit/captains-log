const express = require("express")

const app = express()

const controlledLogs = require("./controllers/logsController.test")

app.get('/', (req, res) => {
    res.send("Welcome to the Captain's Log!")
})

app.use("./logs", controlledLogs)

app.get("*" , (req, res) => {
    res.status(404).send("Oops, no page found!")
})



module.exports = app