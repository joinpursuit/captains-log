const express = require("express");
const logController = require("./controllers/logs")
const app = express();

app.use("/logs", logController);

app.get("/", (req, res) => {
    console.log("Get request to /")
    res.send("Welcome to the captain's log")
});


// app.get("/logs/?order=asc", (req, res) => {
//     console.log("Yall should be in order")
//     logArray.sort((x, y) => {
//         let a = a.captainName.toUpperCase(),
//             b = b.captainName.toUpperCase();
//         return a == b ? 0 : a > b ? 1 : -1
//     })
//     res.send(logArray)
// })

app.get("*", (req, res) => {
    res.status(404).json({error: "Page not found"})
});




module.exports = app;