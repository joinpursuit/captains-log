//Dependencies
const { request } = require("express");
const express = require("express");
// const PORT = require('./P')
//files
const captainLogArray = require("../models/logs");

//.Router creates a new controller that handles a sub-routes.
const orderRoute = express.Router();


orderRoute.get("/", (request, response) => {

  const { order } = request.query;
  if (order === "asc") {
    captainLogArray.sort(function (a, b) {
      if(a.captainName.toLowerCase() < b.captainName.toLowerCase()){}
        return -1;    
    });
  } else if (order === "desc") {
    console.log(order)
    captainLogArray.sort(function (a, b) {
        if(b.captainName.toLowerCase() < a.captainName.toLowerCase())
        return -1;
        // return
       
      });
    }
    
  response.send(captainLogArray);
});
// module.exports = orderRoute;
