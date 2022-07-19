const express = require("express");
const app = express();
app.use(express.json())
app.use((req, res, next) => {
    console.log("this code runs for every request")
    next();
})
const logsController = require("./controllers/logsController")
app.get("/", (req, res) => {
    res.send("Welcome to the captains log")
})

app.use("/logs", logsController)

app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})

module.exports = app