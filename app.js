const express = require('express');
const { response } = require('express')

const app = express();

app.get('/', (request, response) => {
    // console.log('GET request to route - "/"')
    response.send("My Log ⚓📋")
})

module.exports = app;