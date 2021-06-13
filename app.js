const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()); 
app.use(cors())

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