const express = require("express");
const app = express();
const logsController = require("./controllers/logsController")

app.use(express.json()); // Parse incoming JSON
app.use((req, res, next) => {
    console.log("This code runs for EVERY request");
    next();
  });


app.get("/", (req, res) => {
    res.send("Welcome!")
})

app.use("/logs", logsController)

app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})


module.exports = app