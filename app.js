const express = require("express");
const app = express();

const logsData = require("./models/logs.js")

//  MIDDLEWARE TURNS JSON INTO USABLE JAVASCRIPT
app.use(express.json());

const logsController = require("./controllers/logsController.js")

// ROUTES
app.get("/", (request, response) => {
    response.send("welcome to the captain's log");
});
  
// INDEX
app.get("/logs", (req, res) => {
    res.json(logsData);
});

// MIDDLEWARE
app.use("/logs", logsController);

// 404 ROUTE
app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})

module.exports = app;