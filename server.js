const app = require("./app.js");


require("dotenv").config();


app.listen(PORT, () => {
    console.log(`Adnan you are live on port ${PORT}`)
})