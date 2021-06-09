const express = require("express");
const app = express();

app.get("/",  (req, res) => {
    res.send("Captains Log")
})


module.exports = app;