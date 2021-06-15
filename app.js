const express = require('express')
const app = express()
const logsController = require("./controllers/logsController")
const cors = require("cors")

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.send("Welcome to the captain's log")
})

app.use("/logs", logsController)

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app