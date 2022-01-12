const express = require("express");
const logsArray = require("../models/log");
const logs = express.Router(); //when i dig into this, i find the route im looking for in the parameter

//this '/' is saying /logs in the browser
logs.get('/', (_,response)=> { 
    console.log('this is your log place')
    response.send(logsArray)
})

//adding input to the logs array, then sending a 201 response to server and file as json. That's the language the internet understands
logs.post('/',(request,response)=> {
    // console.log('adding stuff girl')
    logsArray.push(request.body) //the update has to happen before sending the updated information
    response.status(201).json(logsArray)
})


logs.get('/:value', (request,response)=>{
    console.log(request)
    const {value} = request.params;
    response.send(logsArray[value])
})



// logs.get("/", (request, respond) => {
//   console.log("GET request to / logs");
//   respond.send(logsArray);
// });

module.exports = logs;