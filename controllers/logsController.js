const express = require("express");
const logs = express.Router();
const logArray = require("../models/log")

logs.get("/", (req ,res)=>{
    const {order} = req.query
    console.log(req.query) // {order}
    if(order === "asc"){
        logArray.sort((a, b)=>{
            if(a.captainName < b.captainName) { return -1; }
            if(a.captainName > b.captainName) { return 1; }
            return 0;
        })
    }else if (order === "desc"){
        logArray.sort((b, a)=>{
            if(a.captainName < b.captainName) { return -1; }
            if(a.captainName > b.captainName) { return 1; }
            return 0;
        })
    }
    res.json(logArray)
})

module.exports = logs