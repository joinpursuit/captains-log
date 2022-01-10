const express = require("express");
const app = express()

const captainsLogs = require("./models/log.js")

app.get("/", (req,res)=>{
    if(req.url !== "/"){
        res.status(301).send("trigger")
        return;
    }
    res.send("Welcome to the Captains Log")
})

app.get("/logs", (req,res)=>{
    // if(req.url !== "/logs"){
    //     res.status(301).send("trigger")
    //     return;
    // }
        res.send(captainsLogs)
    

})






module.exports = app