const express = require("express");
const logsController = require("./controllers/logsController");

const app = express();
const log = require("./models/log")

app.use("/logs", logsController);


app.get("/", (req, res) => {
    res.send(`welcome to the captain's log`);
  });

app.get("/logs", (req, res) => {
    res.send(captain);
  
  });
  
app.get("/logs/search", (req, res) => {
    
console.log('this is query')
console.log(req.query)
console.log(req.params)
res.send(req.params)
  
  });


  app.get("/logs/:index", (req, res) => {
    console.log("index is firing");
    const { index } = req.params;
    if (log[index]) {
        console.log(req)
      res.send(log[index]);
    } else {
      res.send(`Sorry, no log found at ${index}`);
    }
  });
  
///logs?order=asc


app.get("*", (req, res) => {
    res.status(404).send("Page Not Found!!!")
})

module.exports = app;


// - create a route `/` that says something like `welcome to the captain's log`
// - create a route `/logs` that shows the array of logs you've created
// - create a 404 route that when a user tries to access a route that 
//doesn't exist, they will see this page


// @channel inside of your logsController.test.js file
// add a line that requires app.
// const app = require("../app.js)
// Then change the test file where it says 
// request(logs) change it to request(app) and then 
// change the .get("/") and prepend the routes to "/logs"