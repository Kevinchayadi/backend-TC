require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT;

app.get("/" , (req , res) => {
    res.send("Hello World")
}) 

app.listen(port , () => {
    console.log(`Your server running on http://localhost:${port}`)
})