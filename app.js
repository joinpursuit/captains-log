// Dependencies 
const express = require("express")
const cors = require("cors")

// Configuration
const app = express();
const logs = require('./controllers/captainLogsController.js')
const logsArray = require('./models/log.js')

// Routes
app.use((req,res, next) =>{ 
    next()
 } )

app.use(cors())
 app.use(express.json())

app.get("/", (req, res) => { 
    res.send("Welcome to the captain's log")
 })

app.use("/logs", logs )


app.get("*", (req, res) => { 
    res.status(404).send("Page not found.")
 })


 
 // Export
 module.exports = app