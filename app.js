// Dependencies
const express = require("express");

// Configuration
const app = express();

// Middleware (new way of writing body-parser)
app.use(express.json());

// Controllers
const logsController = require("./controllers/logsController.js");
app.use("/logs", logsController);

// Routes
app.get("/", (req, res)=>{
    res.send("welcome to the captain's log");
})

app.get("*", (req, res)=>{
    res.status(404).json({ error: "Page not found" });
})

// Export
module.exports = app;