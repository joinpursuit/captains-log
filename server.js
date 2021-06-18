//DEPENDENCIES
const app = require('./app')

//CONFIG
require('dotenv').config()
const PORT = process.env.PORT

//Listening
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))
