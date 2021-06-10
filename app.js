const express = require("express");
const app = express();

app.use(express.json()); // Parse incoming JSON // this adds "body" to req object

//MIDDLEWARE
app.use((req, res, next)=>{
  console.log(`${req.method} request made at ${req.url}`)
  next();
})

app.get("/", (req, res) => {
  res.send("Welcome to our Sailing Log");
});

const logsController = require("./controllers/logsController")
app.use("/logs", logsController)

app.get("*", (req,res)=>{
    res.status(404).send("Page not found");
})


module.exports = app;