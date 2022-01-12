const dotenv  = require('dotenv')
const app = require('./app')

dotenv.config()
const PORT = process.env.PORT || 8080


app.listen(PORT,()=> {
    console.log(`Listening to PORT: ${PORT}`)
})