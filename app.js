const express = require("express");
var cors = require('cors')
const app = express();
const logsArray = require("./models/log");

app.use(express.json());

app.use((req, res, next) => {
    next();
});

const validateURL = (req, res, next) => {
    next();
  };

  app.use(cors())

app.get("/", (req, res) => {
    res.send("welcome to the captain's log");
});

app.get("/logs", (req, res) => {
    res.json(logsArray)
});

app.post("/logs", validateURL, (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length-1]);
});

app.get("/logs/:arrayIndex", validateURL, (req, res) => {
    const { arrayIndex } = req.params;
       if(arrayIndex >= logsArray.length){
           res.redirect("/logs");
        } else {
            res.json(logsArray[arrayIndex]);     
        }         
});

app.delete("/logs/:arrayIndex", validateURL, (req, res) => {
    const { arrayIndex } = req.params;
        if(logsArray[arrayIndex]){
            let removed = logsArray.splice(arrayIndex, 1);
            res.json(removed[0]);
        } else {
            res.status(404).json({error: "not found"})
        }
});


module.exports = app;