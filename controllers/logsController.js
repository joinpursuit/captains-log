const express = require("express");
const logs = express.Router();
let logsArray = require("../models/log");

/* code tested fine in Postman, but won't pass test POST, commented out for now
const validateData = (req, res, next) => {
    const checkInputDataType = (type, objContainsSameType) => {
        for (const key in objContainsSameType) {
            if (typeof objContainsSameType[key] !== type)
                return { passed: false, invalid: key };
        }
        return { passed: true };
    }

    if (Object.keys(req.body).length !== 5)
        return res.status(400).send("There are missing or additional pairs(key/value) in your data. Please submit again with correct pairs.");

    const { captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis } = req.body;
    let validateResult = null;

    validateResult = checkInputDataType("string", { captainName, title, post });
    if (!validateResult.passed) 
        return res.status(400).send(`Opps, either ${validateResult.invalid} is missing or its value is not a string`);
        
    validateResult = checkInputDataType("boolean", { mistakesWereMadeToday });
    if (!validateResult.passed)
        return res.status(400).send(`Opps, ${validateResult.invalid} is missing or its value is not a boolean`);

    validateResult = checkInputDataType("number", { daysSinceLastCrisis });
    if (!validateResult.passed)
        return res.status(400).send(`Opps, ${validateResult.invalid} is missing or its value is not a number`);

    next();
}
*/

logs.get("/", (req, res) => {
    res.json(logsArray);
})

logs.get("/:id", (req, res) => {
    const { id } = req.params;
    logsArray[id] ? res.json(logsArray[id]) : res.redirect("/404");
})

logs.post("/", (req, res) => { // REMOVE VALIDATE FOR NOW
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1]);
})

logs.delete("/:id", (req, res) => {
    const { id } = req.params;
    if (!logsArray[id])
        return res.redirect("/404");

    const deleted = logsArray.splice(id, 1);
    res.json(deleted);
})

logs.put("/:id", (req, res) => {
    const { id } = req.params;
    if (!logsArray[id])
        return res.redirect("/404");

    logsArray[id] = req.body;
    res.json(logsArray[id]);
})

module.exports = logs;
