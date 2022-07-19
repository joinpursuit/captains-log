//Dependencies

const app = require("./app.js");

//config

require("dotenv").config();
const PORT = process.env.OUR_PORT;

//LISTEN

app.listen(PORT, () => {
  console.log(`testing testing listen on port ${PORT}`);
});
