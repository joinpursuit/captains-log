const express = require("express")
const logRouter = require("./routes/log")
const app = express()

// for forms
app.use(express.urlencoded({extended: false}));
app.use(express.json())

// app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    console.log("Respond to /")
    res.send("welcome to the captain's log")
})

// Delegate everything that starts with '/bookmarks' to the bookmarks controller.
app.use("/logs", logRouter);


// Star (*) matches anything we haven't matched yet.
app.get("*", (req, res) => {
    console.log("Error Found")
    res.status(404).json({error: "Page not found"})
})

module.exports = app;