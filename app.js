const { response } = require("express");
const express = require("express");
const app = express();

const logs = require("./controllers/logsController");

app.use(express.json());
app.use("/logs", logs);


app.get('/', (request, response) => {
console.log( "get to /")
response.send("Welcome Captain");
});











module.exports = app;