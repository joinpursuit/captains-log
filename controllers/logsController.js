const express = require("express");
const logsRoute = express.Router();
const logsArray = require("../models/log.js");
let logsArrayCopy = logsArray.slice();

logsRoute.get("/", (req, res)=> {
  const { order, mistakes, lastCrisis } = req.query;

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
    res.redirect("/");
  }
});

logsRoute.post("/", (req, res)=> {
  logsArray.push(req.body);
  res.json(logsArray[logsArray.length-1]);
});

logsRoute.delete("/:index", (req, res) => {
  const { index } = req.params;
  if( logsArray[index] ) {
    let remove = logsArray.splice(logsArray[index], 1);
    res.json(remove);
  } else {
    res.status(404).json({error: "Not found"});
  }
});

logsRoute.put("/:index", (req, res) => {
  const { index } = req.params;
  const { title, post, mistakesWereMadeToday, daysSinceLastCrisis } = req.body;

});

const validateFunction = () => {
  
}

// Add a validation function that checks to make sure that the values of each key are the correct type
// captainName: string
// title: string
// post: string
// mistakesWereMadeToday: boolean
// daysSinceLastCrisis: number
// If a wrong datatype is entered, send an error, otherwise push the new data into the array

// Add a new folder called v2 - In version 2, instead of sending JSON, you'll be sending your data embedded in some HTML.

// inside of the v2 folder make a new controllers folder
// inside of the controllers folder add logsController.js
// in app.js set up the new controllers so that the route will be /v2/logs
// write some logic to display the index data embedded in an unordered list of anchor tags linking to the show routes at /v2/logs/:index
// write some logic to display the show data as an h1 tag for the title, a p tag for the post, and additional styling for the other fields. Create a back button that takes users back to /v2/logs
// This code likely is becoming rather tough to maintain. You can look into setting up a template engine like ejs or creating a create-react-app front end and connecting it to the main API /logs not /v2/logs - NOTE: we'll learn how to connect a create-react-app in a later lesson.


// If you've already written a validation function, try adding it to the update route. If you have not written it yet, give it a try!
// Go back and try any of the previous Bonuses

module.exports = logsRoute;