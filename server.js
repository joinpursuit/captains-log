const app = require("./app.js");

// its the way inorder to use the environmental variables.
require("dotenv").config();

const PORT = process.env.PORT;

// listening to the port .. so we could use localHost{PORT}
app.listen(PORT, () => {
	console.log(`It is listening on ${PORT} go Ahead !!!`);
});