const express = require("express");
const logs = express.Router();

const logArray = require("../models/log");

// HOME ROUTE
logs.get("/", (req, res) => {
  console.log("Get request to /logs");
//   console.log(req.query);
  const { order, mistakes, lastCrisis } = req.query;
  if (req.originalUrl === "/logs") {
    res.send(logArray);
  } else {
    const arr = [...logArray];
    // HOME ROUTE W/QUERY FOR ARRAY IN ASCENDING ORDER: /logs?order=asc 
    if (order === "asc") {
      arr.sort((a, b) => {
        (a = a.captainName.toUpperCase()), (b = b.captainName.toUpperCase());
        return a === b ? 0 : a > b ? 1 : -1;
      });
      res.send(arr);
    // HOME ROUTE W/QUERY FOR ARRAY IN DESCENDING ORDER: /logs?order=desc
    } else if (order === "desc") {
    //    console.log(order);
      arr.sort((a, b) => {
        (a = a.captainName.toUpperCase()), (b = b.captainName.toUpperCase());
        return a === b ? 0 : a > b ? -1 : 1;
      });
      res.send(arr);
    //  HOME ROUTE W/QUERY IF MistakesMadeToday IS TRUE: /logs?mistakes=true
    } else if (mistakes === "true") {
      const allMistakes = arr.filter((el) => el.mistakesWereMadeToday ===  true) 
     console.log(allMistakes);
        res.send(allMistakes);
    } 
    // HOME ROUTE W/QUERY IF MistakesMadeToday IS FALSE:/logs?mistakes=false
    else if (mistakes === "false") {
          const allMistakes = arr.filter((el) => el.mistakesWereMadeToday ===  false) 
        //  console.log(allMistakes);
            res.send(allMistakes);
        }
        // HOME ROUTE W/QUERY IF DaysSinceCrisis is > 10: /logs?lastCrisis=GreaterThan10
        else if (lastCrisis === "gt10") {
            const crisisDays = arr.filter((el) => el.daysSinceLastCrisis > 10 ) 
              res.send(crisisDays);
          }
        // HOME ROUTE W/QUERY IF DaysSinceCrisis is >= 10:  /logs?lastCrisis=GreaterThanOrEqualTo20
          else if (lastCrisis === "gte20") {
            const crisisDays = arr.filter((el) => el.daysSinceLastCrisis >= 20 ) 
              res.send(crisisDays);
          }
        // HOME ROUTE W/QUERY IF DaysSinceCrisis is <= 5: /logs?lastCrisis=LessThanOrEqualTo5
          else if (lastCrisis === "lte5") {
            const crisisDays = arr.filter((el) => el.daysSinceLastCrisis <= 5 ) 
              res.send(crisisDays);
          }
}
});
// HOME ROUTE W/PARAMETER POINTING TO INDEX POSITION, IF NO POSITION REDIRECT TO ERROR ROUTE
logs.get("/:arrayIndex", (req, res) => {
  console.log("Get request to /arrayIndex");
  const { arrayIndex } = req.params;
  if (logArray[Number(arrayIndex)]) {
    res.send(logArray[Number(arrayIndex)]);
  } else {
    res.redirect("/*");
  }
});
// POST/CREATE NEW LOG AND PUSH INTO ARRAY, NEW ARRAY WILL BE IN JSON FORMAT
logs.post("/", (req, res) => {
    console.log("/POST to /logs");
    logArray.push(req.body);
    res.json(logArray);
    res.status(201);
  });
// DELETES ENTIRE OBJECT AT INDEX POSITION
  logs.delete("/:index", (req, res) => {
    const { index } = req.params;
    if (logArray[index]) {
      const deletedLog = logArray.splice(index, 1);
      res.status(200).json(deletedLog);
    } else {
        res.status(404).json({error: "Log not found"})
    }
  });
// UPDATES OBJECT AT INDEX POSITION BY REPLACING THAT ENTIRE OBJECT
  logs.put("/:index", (req, res) => {
      logs[req.params.index] = req.body
      res.status(200).json(logArray[req.params.index])
  })

module.exports = logs;
