const express = require("express");
const logsController = require("./controllers/logs");

const app = express();

// const appJson = express.json();
// console.log(appJson.toString());
app.use(express.json()); // this line is adding 'body' key to the req object

app.use((req, res, next) => {
  console.log(`${req.method} request made at ${req.url}`);
  next();
});


app.use("/logs", logsController);

// ROOT
app.get("/", (req, res) => {
  req.body;
  res.send("Captain App");
});

// 404 catch all
app.get("*", (req, res) => {
  res.status(404).send("Page Not Found!!!");
});

module.exports = app;


//   - `/logs?order=asc` it will organize the logs alphabetically
// - `/logs?order=desc` it will organize the logs in reverse alphabetical order
// - `/logs?mistakes=true` it will only show the logs where the value of `mistakesWereMadeToday` is true
// - `/logs?mistakes=false` it will only show the logs where the value of `mistakesWereMadeToday` is false
// - `/logs?lastCrisis=gt10` it will return all the logs where the `daysSinceLastCrisis`is **g**reater 
  



// app.get("/logs/:index", (req, res) => {
//     console.log("index is firing");
//     const { index } = req.params;
//     if (log[index]) {
//         console.log(req)
//       res.send(log[index]);
//     } else {
//       res.send(`Sorry, no log found at ${index}`);
//     }
//   });
  
///logs?order=asc





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