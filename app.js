const express = require("express")
const logsController = require("./controllers/logs")
const logsArray = require(".models/log")
const app = express()

app.use("/logs", logsController)

app.get("/", (request, response)=> {
    console.log("Get /")
    response.send("Home")
})

app.get("*", (request, response)=>{
    response.sendStatus(404)
})

module.exports = app