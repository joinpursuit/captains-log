const express = require("express")
const app = express()
const logsController = require("./controllers/logsController")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use("/logs", logsController)

app.get("/", (request, response) => {
    response.send("Welcome to the Captain's Log App!")
})

app.get("*", (request, response) => {
    response.status(404).send("Not Found")
})

module.exports = app