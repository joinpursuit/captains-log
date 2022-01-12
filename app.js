
// DEPENDENCIES
const express = require("express");
//files
const captainControllers = require('./controllers/logsControllers')

//creates the Express app
const app = express();

app.use(express.json())

app.use('/logs', captainControllers)




//Home route
app.get("/", (_, response) =>{
    console.log('GET request to /')
    response.send("Welcome to Captain's log");
})


// Start (*) Matches anything we've not matched yet
app.get('*', (request, response) =>{
    console.log('GET request to *')
response
.status(404)
.json({Error: 'Page not found!'})
})

// EXPORT
module.exports = app;