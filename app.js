const express = require("express");
const app = express();
app.use(express.json());

const logsController = require("./controllers/logsController.js");

app.get("/", (req, res ) => {
    res.send("Welcome to the captian logs app !@#!@#!@")
});


app.use("/logs", logsController)


app.get("*", (req, res) => {
    res.status(404).json({error: "Not found"})
})



module.exports = app;