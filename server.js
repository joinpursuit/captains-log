

const dotenv = require('dotenv')
const app = require("./app");

dotenv.config();
const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});


