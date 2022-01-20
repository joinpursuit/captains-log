const express = require("express");
const app = express();
const cors = require("cors");
const logsController = require("./controllers/logsController.js");

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to the captain's log");
});

//every route that in our bookmarkController file, we are gonna prepend "/bookmarks" and send it our controller
app.use("/logs",logsController);

app.get("*",(req,res)=>{
    res.status(404).json({error:"Page not found"});
})

//exporting our entire application with our route attached
module.exports = app;