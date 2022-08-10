const express = require("express");
 const app = express();

 const logController = require("./controllers/logcontroller");

 app.use(express.json());

 app.get("/", (req, res) => {
   res.send("welcome to the captain's log");
 });

 app.use("/logs", logController);

 app.use("*", (req, res) => {
   res.status(404).json({ error: "Not Found" });
 });

 module.exports = app;