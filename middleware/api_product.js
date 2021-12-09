const express = require('express');
const router = express.Router();
const Product = require('../models/product_schema')

router.get('/', async (req, res) => {
    const doc = await Product.find({});
    res.json(doc);
});

router.get("/:products_id", async (req, res) => {
    const doc = await Product.find({ products_id: req.params.products_id });
    res.json(doc);
});

router.put("/update/:id", async (req, res) => {
    const doc = new Product({
        _id: req.params.id,
        products_id: req.body.products_id,
        products_name: req.body.products_name,
        description: req.body.description,
        price: req.body.price,
        status: req.body.status
    })

    Product.updateOne({_id: req.params.id}, doc).then(() => {
        res.status(200).json({
            message: "Product updated successfully"
        });
    }).catch((err) => {
        res.status(400).json({
            error: err
        })
    });
})

module.exports = router;