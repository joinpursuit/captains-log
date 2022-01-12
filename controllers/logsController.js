const express = require("express");
const logsRoute = express.Router();
const logsArray = require("../models/log.js");

logsRoute.get("/", (req, res)=> {
  const { order, mistakes, lastCrisis } = req.query;

  switch( order ){
    case "asc":
      break;
    case "desc":
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
  res.json(logsArray);
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