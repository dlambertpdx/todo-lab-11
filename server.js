require('dotenv').config();

// App Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const client = require ('./lib/client');

// Database client
client.connect();

const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());




app.listen(PORT, () => {
    console.log('server is running on PORT', PORT);
});