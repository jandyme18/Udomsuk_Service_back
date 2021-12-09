const dotenv = require('dotenv');
dotenv.config

const express = require('express');
const app = express();
const cors = require('cors');

var corsOptions = {
    origin: [
        "http://localhost:3000",
        "http://192.168.1.14:3000"
    ],
    optionsSuccessStatus: 200
}

let port = process.env.PORT || 8081;

require('./config/database_connection')

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', require('./routes/api'))
app.listen(port, () => {
    console.log(`Server is on port ${port}`);
});

