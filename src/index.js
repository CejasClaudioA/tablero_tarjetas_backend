require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//settings
const port = process.env.port;

//middlewares
app.use(morgan('dev'));
app.use(cors());


//routes


//Server
app.listen(port, () => {
    console.log("Server on port", port);
})