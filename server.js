<<<<<<< HEAD
const app = require("./app.js");

require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
=======
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Listening on PORT ", PORT)
})
>>>>>>> e949b80971ee1381effab4ee4ac374f186b4d6f4
