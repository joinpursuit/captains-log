const express = require("express");
const app = express()

const logs = require("./controllers/logsController.js")

app.get("/", (req,res)=>{
    res.send("Welcome to the Captains Log")
})

app.use("/logs", logs);


app.get("*", (req,res)=>{
    res.status(404).json({message: "not a valid path"})
})






module.exports = app