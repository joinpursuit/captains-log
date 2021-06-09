const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to our Sailing Log");
});

const logsController = require("./controllers/logsController")
app.use("/logs", logsController)

app.get("*", (req,res)=>{
    res.status(404).send("Page not found");
})


module.exports = app;