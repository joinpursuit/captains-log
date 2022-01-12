const express = require("express");
const logsRoute = express.Router();
const logsArray = require("../models/log.js");
let logsArrayCopy = logsArray.slice();

logsRoute.get("/", (req, res)=> {
  const { order, mistakes, lastCrisis } = req.query;
  console.log("~~req.query~~", req.query);

  if( order || mistakes || lastCrisis ) {

    switch( order ){
      case "asc":
        logsArrayCopy.sort((a, b)=> {
          let first = a.captainName.toLowerCase();
          let second = b.captainName.toLowerCase();
          if( first < second ){
            return -1;
          } else {
            return 1;
          }
        });
        res.json(logsArrayCopy);
        break;
      case "desc":
        logsArrayCopy.sort((a, b)=>{
          let first = a.captainName.toLowerCase();
          let second = b.captainName.toLowerCase();
          if ( first === second ){
            return 0;
          } else  if ( first < second ){
            return 1;
          } else {
            return -1;
          }
        });
        res.json(logsArrayCopy);
        break;
      default:
    }

    switch( mistakes ){
      case "true":
        let mistakes = logsArray.filter((log) => log.mistakesWereMadeToday === true ? log : null);
        res.json(mistakes);
        break;
      case "false":
        let noMistakes = logsArray.filter((log) => log.mistakesWereMadeToday === false ? log : null);
        res.json(noMistakes);
        break;
      default:
    }
    
    switch( lastCrisis ){
      case "gt10":
        let greaterThanTen = logsArray.map((log)=> log.daysSinceLastCrisis > 10 ? log : null);
        res.json(greaterThanTen);
        break;
      case "gte20":
        let greaterThanTwenty = logsArray.map((log)=> log.daysSinceLastCrisis >= 20 ? log : null);
        res.json(greaterThanTwenty);
        break;
      case "lte5":
        let lessThanFive = logsArray.map((log)=> log.daysSinceLastCrisis <= 5 ? log : null);
        res.json(lessThanFive);
        break;
      default:
    }
  } else {
    res.json(logsArray);
  }
});

logsRoute.get("/:id", (req, res) => {
  const { id } = req.params;
  if( logsArray[id] ) {
    res.send(logsArray[id]);
  } else {
    res.redirect("/")
  }
});

//POST

//DELETE


module.exports = logsRoute;