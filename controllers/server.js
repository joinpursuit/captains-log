const app = require("./app")

const dotenv = require("dotenv").config()

const { PORT } = process.env

app.listen(PORT, ()=> {
    console.log(`Listening to port ${PORT}`)
}) 