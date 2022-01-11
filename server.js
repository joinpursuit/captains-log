//importing app.js
const app = require("./app.js");

// its the way inorder to use the environmental variables.
require("dotenv").config();
// we are creating the variable that was inside of the env so we can Use ...
const PORT = process.env.PORT;

// listening to the port .. so we could use localHost{PORT}
app.listen(PORT, () => {
	console.log(`It is listening on ${PORT} go Ahead !!!`);
});
