const dotenv = require('dotenv');
dotenv.config

const express = require('express');
const app = express();
const cors = require('cors');

let port = process.env.PORT || 8081;

require('./config/database_connection')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', require('./routes/api'))
app.listen(port, () => {
    console.log(`Server is on port ${port}`);
});