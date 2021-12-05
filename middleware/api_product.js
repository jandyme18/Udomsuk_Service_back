const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Product = require('../models/product_schema')
const crypto = require("crypto");

router.get('/', async (req, res) => {
    const doc = await Product.find({});
    res.json(doc);
});

router.get("/:products_id", async (req, res) => {
    const doc = await Product.find({ products_id: req.params.products_id });
    res.json(doc);
});

module.exports = router;