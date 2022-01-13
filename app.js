const express = require("express");
const app = express()

const logsController = require("./controllers/logsController.js")

app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Welcome to the Captains Log")
})

app.use("/logs", logsController);


app.get("*", (req, res)=>{
    res.status(404).json({message: "Not valid"})
})





module.exports = app