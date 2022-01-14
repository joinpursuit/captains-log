// Dependencies
const express = require("express");

// Configuration
const app = express();

// Inject cors middleware into our application (for connecting to frontend)
const cors = require("cors");
app.use(cors());

// Middleware (new way of writing body-parser)
app.use(express.json());

// Controllers
const logsController = require("./controllers/logsController.js");
app.use("/logs", logsController);

// ** START: Part 2 bonus - New controllers & route
app.get("/v2", (req, res)=>{
    res.send("welcome to the captain's log V2");
})

const logsControllerV2 = require("./v2/controllers2/logsController2");
app.use("/v2/logs", logsControllerV2);
// ** END: Part 2 bonus - New controllers & route

// Routes
app.get("/", (req, res)=>{
    res.send("welcome to the captain's log");
})

app.get("*", (req, res)=>{
    res.status(404).json({ error: "Page not found" });
})

// Export
module.exports = app;