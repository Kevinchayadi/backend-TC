
const config = require('./config');

const express = require('express');
const app = express();
const testConnection = require('./config/db').testConnection;
const logger = require('./utils/logger');
const pinoHttp = require("pino-http");
const indexRoute = require('./routes/index');


const port = config.app.port;

app.use(pinoHttp({ logger }));
app.use('/api', indexRoute);

testConnection();
app.listen(port , () => {
    console.log(`Your server running on http://localhost:${port}`)
})