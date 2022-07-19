const express = require('express')
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("8.4 IS THE COOLEST!@#!@#!@!@");
    next();
});

const logsController = require('./controllers/logsController')

app.get('/', (req, res) => {
    res.send("Welcome")
})


app.use('/logs', logsController)


app.get("*", (req, res) => {
    res.status(404).json({ error: "page not found" })
})

module.exports = app;