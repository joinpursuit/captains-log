// DEPENDENCIES
const express = require("express");
const logsController = require("./controllers/logsController.js");

// CONFIGURATION
const app = express();

// ROUTES
app.use(express.json());

app.use("/logs", logsController);

app.get("/", (req, res)=> {
    res.send("welcome to the captain's log")
})

app.get("*", (req, res)=> {
    res.status(404).json({error: "Can not find page"});
    return;
})

module.exports = app;

