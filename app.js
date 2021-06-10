const express = require('express');
const app = express();
const logsController = require('./controllers/logsController')
app.get('/', (req, res) => {
    res.send(`welcome to the captain's log`)
})

app.use(express.json());

app.use((req, res, next) => {
    console.log("This code runs for every request");
    next();
});
  
app.use('/logs', logsController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;