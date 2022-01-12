const express = require("express");
const logRoutes = express.Router();
const logArr = require("../models/log.js");

// START: for part 2 bonus section
const { validateURL } = require("../models/validations.js");
// END: for part 2 bonus section

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

// *** PART 2 - Create & Show
logRoutes.get("/:id", (req, res)=>{
    const { id } = req.params;
    if (logArr[id]){
        res.json(logArr[id]);
    } else {
        res.status(404).json({message: "Log not found"});
    }
})

// CREATE (and using `validateURL`)

/* Validating/giving error for Wrong answers seem to not be working - check `validations.js` file */
// logRoutes.post("/", validateURL, (req, res)=>{
logRoutes.post("/", (req, res)=>{
        // *** Part 2:
        logArr.push(req.body);
        res.json(logArr[logArr.length-1]);
    }
)

module.exports = logRoutes;