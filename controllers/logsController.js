const express = require("express");
const logsRoute = express.Router();
const logsArray = require("../models/log.js");
let logsArrayCopy = logsArray.slice();
// /logs?order=asc it will organize the logs alphabetically
// /logs?order=desc it will organize the logs in reverse alphabetical order
// /logs?mistakes=true it will only show the logs where the value of mistakesWereMadeToday is true
// /logs?mistakes=false it will only show the logs where the value of mistakesWereMadeToday is false
// /logs?lastCrisis=gt10 it will return all the logs where the daysSinceLastCrisisis greater tthan 10
// /logs?lastCrisis=gte20it will return all the logs where the daysSinceLastCrisisis greater tthan or equal to 20
// /logs?lastCrisis=lte5it will return all the logs where the daysSinceLastCrisisis less tthan or equal to 5
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
        break;
      case "false":
        break;
      default:
    }
  
    switch( lastCrisis ){
      case "gt10":
        break;
      case "gte20":
        break;
      case "lte5":
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