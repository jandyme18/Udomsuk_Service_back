const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const product = require('../models/product_schema');
app.use(express.json());

// http://localhost:8081/findProd?product_id=PROD-720722
router.get("/findProd", async (req, res) => {
    const doc = await product.findOne({ product_id: req.query.product_id });
    if (!doc){
        return res.send("not found")
    }
    res.json({ result: doc });
});

module.exports = router;