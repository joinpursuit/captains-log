const express = require("express");
const logs = express.Router()
const logsArr = require("../models/log.js")


logs.get("/", (req,res)=>{
    res.send(logsArr)
})

logs.get("/:index", (req, res)=>{
    const { index } = req.params
    if(logsArr[index]){
        res.json(logsArr[index])
    }else{
        res.redirect("/not-found")
    }
})

logs.post("/", (req,res)=>{
    logsArr.push(req.body);
    res.json(logsArr[logsArr.length-1])
});

logs.delete("/:index", (req, res)=>{
    let { index } = req.params
    let deleteLog = logsArr.splice(index, 1)
    res.json(deleteLog[0])
})


module.exports = logs