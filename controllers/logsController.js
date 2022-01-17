const express = require("express");
const app = require("../app");
const logsArray = require("../models/log");
const logs = express.Router(); //when i dig into this, i find the route im looking for in the parameter




// //query functionality
// logs.get('/',(request,response) => {
//     const {order} = request.query;
//     const {mistakes} = request.query;
//     const {lastCrisis} = request.query;
//     // order === 'desc' ? console.log('show desc') : console.log('not desc')
//     mistakes === 'true' ? logs.filter(eachLog => {eachLog.mistakesWereMadeToday === 'true'}) : logs.filter(eachLog.mistakesWereMadeToday === 'false')
//     console.log(logs)
//     response.send(logs)
// })

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
    response.redirect('/',302)
})

//Delete Method
logs.delete('/:id', (request, response) => {
    const {id} = request.params;
    logsArray.splice(id,1)
    response.json(logsArray)
})

//update method
logs.put('/:id', (request,response) => {
    const {id} = request.params;
    const {body} = request.params;
    logsArray[request.params.id] = request.body
})




// logs.get("/", (request, respond) => {
//   console.log("GET request to / logs");
//   respond.send(logsArray);
// });

module.exports = logs;