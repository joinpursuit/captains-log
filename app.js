const express = require("express");
const app = express();
const logsArr = require("./models/log.js");
require("dotenv").config();
const PORT = process.env.PORT;

app.get("/", (req,res)=>{
    res.send("Welcome to the captain's log")
});

app.get("/logs", (req,res)=>{
    res.send(logsArr)
})

// app.get("/logs", (req,res)=>{
//     const {asc} = req.query;
//     res.send(`It is logging alphabeticall`)
// })

app.get("/logs/:arrayIndex", (req,res)=>{
    const {arrayIndex} = req.params;

    if(logsArr[arrayIndex]){
        res.send(logsArr[arrayIndex])
    }else{
        res.redirect("*")
    }
})
app.get("*", (req,res)=>{
    res.status(404).json({error: "Page not found"});
})

app.listen(PORT, ()=>{
 console.log(`listening on port ${PORT}`)
});

module.exports = app;