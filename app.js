// EDPENDENCIES
const express = require("express");


// CONFIGURATION
const app = express();

app.use(express.json());

const logsController = require("./controllers/logsController.js");

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the captain's log ");
});

app.use("/logs", logsController);

// app.get("/logs", (req, res) => {
//   res.json(logs);
// })

// app.get("/logs/:index", (req, res) => {
//   const { index } = req.params
//   if(logs[index]){
//     res.json(logs[index]);
//   } else {
//     res.status(404).json({message: "Log not found"});
//   }
// })

// const logsController = require("./controllers/logsController.js");
// app.use("/logs", logsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" }); 
})

// EXPORT
module.exports = app;