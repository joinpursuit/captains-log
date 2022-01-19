// DEPENDENCIES
const express = require("express");
const logRoutes = express.Router();
const logArr = require("../models/log.js");

// ROUTES
logRoutes.get("/", (req, res)=> {
    res.json(logArr);
})

logRoutes.post("/", (req, res)=> {
    logArr.push(req.body);
    res.json(logArr[logArr.length - 1]);
})

logRoutes.get("/:index", (req, res)=> {
    const {index} = req.params;
    if(logArr[index]) res.json(logArr[index]);
    else res.redirect("*");
})

logRoutes.delete("/:index", (req, res)=> {
    const {index} = req.params;
    if(logArr[index]) res.json(logArr.splice(index, 1));
    else res.redirect("*");
})

logRoutes.put("/:index", (req, res)=> {
    const {index} = req.params;
    if(logArr[index]) {
        logArr[index] = req.body
        res.json(logArr[index]);
    } else {
        res.status(404).json({error: "Can not find page"});
    }
    
    
})

module.exports = logRoutes;