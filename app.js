const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.send("Welcome to the Captain's Log App")
})