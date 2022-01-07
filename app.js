// Dependencies
const express = require("express");

// Configuration
const app = express();

// Routes
app.get("/", (req, res)=>{
    res.send("Welcome to Captains Log Lab")
})

// Export
module.exports = app;