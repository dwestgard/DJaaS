/*
    This is the entry file for the app.
 */

// package imports
const express = require('express');
require('dotenv').config() // load environment variables

// ExpressJS app setup
const app = express();
const port = process.env.DJAAS_API_PORT

app.get('/', (request, response) => {
    response.send("Look at you! You've made it to Dad Jokes as a Service (DJaaS). 👏")
})

app.listen(port, () => console.log(`App listening at port ${port}`))