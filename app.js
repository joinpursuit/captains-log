const express = require("express");

const app = express();
const captain = require('./captainlogs/captainlog')

app.get("/", (req, res) => {
  res.send("Welcome to the captain's log");
});

app.get('/logs', (req, res)=> {
    res.json(captain)
})

app.get('*', (req, res)=>{
    res.status(404).send("404 Not Found!")
})
module.exports = app;
