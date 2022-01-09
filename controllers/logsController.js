const express = require("express");
const logRoutes = express.Router();
const logArr = require("../models/log.js");

logRoutes.get("/", (req, res)=>{
    // *** START bonus section - Part 1
    const { order, mistakes, lastCrisis } = req.query;
        // console.log("bonus: for order: ", order);
        // console.log("bonus: for mistakes: ", mistakes);
        console.log("bonus: for lastCrisis: ", lastCrisis);
    // --- --- --- --- --- ---
    if (order === "asc") {
        // console.log("ascending order - organize the logs alphabetically");
        logArr.sort((a, b) => (a.title > b.title) ? 1 : -1)
    }
    if (order === "desc") {
        // console.log("descending order - organize the logs in reverse alphabetical order");
        logArr.sort((a, b) => (a.title < b.title) ? 1 : -1)
    }
    // --- --- --- --- --- ---
    if (mistakes === "true") {
        // console.log("only show the logs where the value of mistakesWereMadeToday is true");
        const result = logArr.filter((post)=>{
            return post.mistakesWereMadeToday === true;
        })
       res.json(result);
    }
    if (mistakes === "false") {
        // console.log("only show the logs where the value of mistakesWereMadeToday is false");
        const result = logArr.filter((post)=>{
            return post.mistakesWereMadeToday === false;
        })
       res.json(result);
    }
    // --- --- --- --- --- ---
    if (lastCrisis === "gt10") {
        console.log("return all the logs where the daysSinceLastCrisisis greater tthan 10");
        const result = logArr.filter((post)=>{
            return post.daysSinceLastCrisis > 10;
        })
       res.json(result);
    }
    if (lastCrisis === "gte20") {
        console.log("return all the logs where the daysSinceLastCrisisis greater tthan or equal to 20");
        const result = logArr.filter((post)=>{
            return post.daysSinceLastCrisis >= 20;
        })
       res.json(result);
    }
    if (lastCrisis === "lte5") {
        console.log("return all the logs where the daysSinceLastCrisisis less tthan or equal to 5");
        const result = logArr.filter((post)=>{
            console.log("yooo: ", post.daysSinceLastCrisis);
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