const express = require("express");
const logController = require("./controllers/logs")
const app = express();

app.use("/logs", logController);

app.get("/", (req, res) => {
    console.log("Get request to /")
    res.send("Welcome to the captain's log")
});

app.get("*", (req, res) => {
    res.status(404).json({error: "Page not found"})
});




module.exports = app;