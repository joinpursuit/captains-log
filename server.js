const app = require("./app")

require("dotenv").config()
const PORT = process.env.PORT

app.listen(PORT, (request, response) => {
    response.send(`🚀 Listening on port ${PORT} 👩🏽‍🚀`)
})