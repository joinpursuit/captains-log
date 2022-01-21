const express = require("express");
const logsRoutes = express.Router();
const logsArray =  require("../models/log.js");

logsRoutes.get("/", (req, res) => {
    res.json(logsArray);
})

// logsRoutes.get("/",(req, res) => {
//     const { order, mistakes, lastCrisis } = req.query;
//     const copyArr = [...logsArray];
//     let ascArr = copyArr.sort((a,b) => a.captainName.localeCompare(b.captainName));
//     let descArr;
//     if(order === "asc") {
//         res.json(ascArr);
//     } else if (order === "desc"){
//         descArr = ascArr.reverse();
//         res.json(descArr);
//     } else if (mistakes){
//         let trueArray = copyArr.filter(captainObj => captainObj.mistakesWereMadeToday);
//         res.json(trueArray);
//     } else if (!mistakes){
//         let falseArray = copyArr.filter(captainObj => !captainObj.mistakesWereMadeToday);
//         res.json(falseArray);
//     } else if (lastCrisis === "gt10"){
//         let gtTenArray = copyArr.filter(captainObj => captainObj.daysSinceLastCrisis > 10);
//         res.json(gtTenArray);
//     } else if (lastCrisis === "gte20"){
//         let gteTwentyArray = copyArr.filter(captainObj => captainObj.daysSinceLastCrisis >= 20);
//         res.json(gteTwentyArray);
//     } else if (lastCrisis === "lte5"){
//         let lteFiveArray = copyArr.filter(captainObj => captainObj.daysSinceLastCrisis <= 5);
//         res.json(lteFiveArray);
//     } 
// })

logsRoutes.get("/:index", (req, res) => {
    const { index } = req.params;
    if(logsArray[index]) {
        res.json(logsArray[index])
    } else {
        res.redirect("*");
    }
})

logsRoutes.post("/", (req, res) => {
    logsArray.push(req.body)
    res.json(logsArray[logsArray.length-1]);
})

logsRoutes.put("/:index", (req, res) => {
    const { index } = req.params;
    logsArray[index] = req.body;
    res.json(logsArray[index]);
})

logsRoutes.delete("/:index",(req, res) => {
    const { index } = req.params;
    let removed = logsArray.splice(index, 1);
    if(logsArray[index]) {
        res.json(removed)
    } else {
        res.redirect("*");
    }
})



module.exports = logsRoutes;