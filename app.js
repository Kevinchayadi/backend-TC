require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.SERVER_PORT;
const path = require('path');

//logger
const logger = require('./utils/logger')
//const pinoHttp = require("pino-http");

//app.use(pinoHttp({ logger }));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const authRoute = require("./routes/AuthRoute")

app.use('/auth' , authRoute)

app.listen(port , () => {
    console.log(`Your server running on http://localhost:${port}`)
})