const express = require("express");
const logs = express.Router()
const logsArr = require("../models/log.js")


app.get("/logs", (req,res)=>{
    res.send(captainsLogs)
})