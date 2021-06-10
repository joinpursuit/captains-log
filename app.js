// Dependencies
const express = require("express");
const controlers = require("./controllers/logsController");

// Configuration
const app = express()

// Routes
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("welcome to the captain's log")
})
app.use("/logs", controlers)

app.get("*", (req,res)=>{
    res.send("<h2>404 Page Not Found</h2>")
})

module.exports = app