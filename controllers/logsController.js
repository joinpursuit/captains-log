const express = require("express");
const logRoutes = express.Router();
const logArr = require("../models/log.js");

logRoutes.get("/", (req, res)=>{
    // *** START bonus section - Part 1
    const { order, mistakes, lastCrisis } = req.query;
    // --- --- --- --- --- ---
    if (order === "asc") {
        logArr.sort((a, b) => (a.title > b.title) ? 1 : -1)
    }
    if (order === "desc") {
        logArr.sort((a, b) => (a.title < b.title) ? 1 : -1)
    }
    // --- --- --- --- --- ---
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
    // --- --- --- --- --- ---
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
    // --- --- --- --- --- ---
    // *** END bonus section - Part 1

    // *** Original logsController:
    res.json(logArr);
})

module.exports = logRoutes;