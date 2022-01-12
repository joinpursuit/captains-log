const express = require("express")
const logRouter = require("./routes/log")
const app = express()
const bodyParser = require('body-parser')


app.set('view engine', 'ejs')
app.use(logger)

// for forms
// bodyParser for validation
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.use(express.urlencoded({extended: false}))



app.get("/", logger, (req, res) => {
    console.log("Respond to /")
    res.send("welcome to the captain's log")
})


// app.get("/v2/logs" ,(req, res) => {
//     res.render("index")
// })


// Delegate everything that starts with '/bookmarks' to the bookmarks controller.
app.use("/logs", logRouter);


// Star (*) matches anything we haven't matched yet.
app.get("*", (req, res) => {
    console.log("Error Found")
    res.status(404).json({error: "Page not found"})
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = app;