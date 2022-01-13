const express = require("express");
const logRoutes = express.Router();
const logArr = require("../models/log.js");

// START: for part 2 bonus section
// const { validateURL } = require("../models/validations.js");
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
        // redirected to the 404 route written in last part
        res.redirect('/logs/:id');
    }
})

// *** START bonus section - Part 2
const validateURL = (req, res, next) =>{
    // console.log("check req.body: ", typeof req.body.captainName);
    if ((typeof req.body.captainName !== "string") ||
        (typeof req.body.title !== "string") ||
        (typeof req.body.post !== "string") ||
        (typeof req.body.mistakesWereMadeToday !== "boolean") ||
        (typeof req.body.daysSinceLastCrisis !== "number")
    ){
        res.status(404).json({error: "A wrong datatype was entered."});
    } else {
        next();
    }
};
// *** END bonus section - Part 2


// CREATE (and using `validateURL`)
/* Validating/giving error for Wrong answers seem to not be working - check `validations.js` file */
logRoutes.post("/", validateURL, (req, res)=>{
// logRoutes.post("/", (req, res)=>{
        // *** Part 2:
        logArr.push(req.body);
        res.json(logArr[logArr.length-1]);
    }
)

// DELETE
logRoutes.delete("/:id", (req, res)=>{
    const { id } = req.params;
    if (logArr[id]){
        let removed = logArr.splice(id, 1);
        res.json(removed[0]);
    } else {
        res.redirect('logs/:id');
    }
});

// UPDATE
logRoutes.put("/:id", (req, res)=>{
    const { id } = req.params;

    if (!logArr[id]){
        res.status(422).json({
            error: "Not found"
        });
        return;
    };

    // if these data types are all correct, use. Else = error.
    let { captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis } = req.body;
    if (captainName !== undefined && 
        title !== undefined &&
        post !== undefined &&
        mistakesWereMadeToday !== undefined &&
        daysSinceLastCrisis !== undefined){
            logArr[id] = {
                captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis
            };
            res.json(logArr[id]);
    } else {
        res.redirect('logs/:id');
    }
});



module.exports = logRoutes;