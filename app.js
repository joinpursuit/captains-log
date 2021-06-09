// Dependencies 
const express = require("express")


// Configuration
const app = express();
const logs = require('./controllers/captainLogsController.js')
const logsArray = require('./models/log.js')

// Routes
app.use((req,res, next) =>{ 
    console.log("we are in the midleware")
    next()
 } )

 app.use(express.json())

app.get("/", (req, res) => { 
    res.send("Welcome to the captain's log")
 })

app.use("/logs", logs )

app.get("/logs/:index", (req, res) =>{ 
    const { index } = req.params

    res.send(logsArray[index])
 })


app.get("*", (req, res) => { 
    res.status(404).send("Page not found.")
 })


 
 // Export
 module.exports = app