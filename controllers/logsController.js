const express = require("express");
const req = require("express/lib/request");
const logRoutes = express.Router();
const logArr = require("../models/log.js");

logRoutes.get("/", (req, res) => {
     // *** START bonus section - Part 1
     const { order, mistakes, lastCrisis } = req.query;
     if (order === "asc") {
         logArr.sort((a, b) => (a.title > b.title) ? 1 : -1)
     }
     if (order === "desc") {
         logArr.sort((a, b) => (a.title < b.title) ? 1 : -1)
     }
     if (mistakes === "true") {
         const result = logArr.filter((post)=>{
             return post.mistakesWereMadeToday === true;
         })
        res.json(result);
     }
     if (mistakes === "false") {
         const result = logArr.filter((post)=>{
             return post.mistakesWereMadeToday === false;
         })
        res.json(result);
     }
     if (lastCrisis === "gt10") {
         const result = logArr.filter((post)=>{
             return post.daysSinceLastCrisis > 10;
         })
        res.json(result);
     }
     if (lastCrisis === "gte20") {
         const result = logArr.filter((post)=>{
             return post.daysSinceLastCrisis >= 20;
         })
        res.json(result);
     }
     if (lastCrisis === "lte5") {
         const result = logArr.filter((post)=>{
             return post.daysSinceLastCrisis <= 5;
         })
        res.json(result);
     }
     // *** END bonus section - Part 1
 
    res.json(logArr);
});
//GET
logRoutes.get("/:id", (req, res) => {
    if(logArr[req.params.id]) {
        res.send(logArr[req.params.id])
    } else {
        res.redirect("/logs/:id")
    }
})
//CREATE (POST)
logRoutes.post("/", (req, res) => {
    logArr.push(req.body)
    res.json(logArr[logArr.length - 1])
})

//UPDATE (PUT)
logRoutes.put("/:id", (req, res) => {
    const { id } = req.params
    if (logArr[id]) {
        logArr[id] = req.body;
        res.status(200).json(logArr[id])
    } else {
        res.status(404).json({error: "Not found"})
    }
 })

// DELETE
logRoutes.delete("/:id", (req, res) => {
    if (logArr[req.params.id]) {
        const deletedLog = logArr.splice(req.params.id, 1);
        res.status(200).json(deletedLog);
    } else {
        res.status(404).json({ error: "Not found" });
    }
});

module.exports = logRoutes;