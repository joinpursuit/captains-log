const express = require("express");
const logsArray = require("../models/log");
const logs = express.Router(); //when i dig into this, i find the route im looking for in the parameter

//this '/' is saying /logs in the browser
logs.get('/', (_,response)=> { 
    // console.log('this is your log place')
    response.send(logsArray)
})

//adding input to the logs array, then sending a 201 response to server and file as json. That's the language the internet understands
logs.post('/',(request,response)=> {
    // console.log('adding stuff girl')
    logsArray.push(request.body) //the update has to happen before sending the updated information
    response.status(201).json(logsArray)
})

//accessing the parameter - key in the request, the value is updated to be the array in the index
logs.get('/:id', (request,response)=>{
    const {id} = request.params;
    logsArray[id] ? response.json(logsArray[id]) :
    response.redirect('http://localhost:3003/logs/3',302)
})


logs.delete('/:id', (request, response) => {
    const {id} = request.params;
    logsArray.splice(id,1)
    response.json(logsArray)
})


// logs.get("/", (request, respond) => {
//   console.log("GET request to / logs");
//   respond.send(logsArray);
// });

module.exports = logs;