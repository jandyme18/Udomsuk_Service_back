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

// http://localhost:8081/find?product_id=PROD-720722
app.get("/find", async (req, res) => {
    const doc = await product.findOne({ product_id: req.query.product_id });
    if (!doc){
        return res.send("not found")
    }
    res.json({ result: doc });
});