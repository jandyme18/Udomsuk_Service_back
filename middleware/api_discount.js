const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Discount = require('../models/discount_schema')
const Product = require('../models/product_schema')
const crypto = require("crypto");

//มาเขียนหน้านี้ต่อด้วยค่ะ
//เขียนโดยที่สามารถเทสการลดราคาได้ในนี้อะค่ะ ตอนนี้ยังทำไม่เป็น ขี้เกียจด้วย

router.get('/', async (req, res) => {
    const doc = await Discount.find({});
    res.json(doc);
});

router.get("/:code/:productid", async (req, res) => {
    const code = await Discount.findOne({
        code: req.params.code,
        isActive: true
    });
    const product = await Product.findOne({
        productid: parseInt(req.params.productid)
    })
    if (code) {
        const discountMethod = product.price - (product.price * (code.amount / 100));
        res.json({
            result: {
                products_id: product.products_id,
                products_name: product.products_name,
                description: product.description,
                price: discountMethod,
                status: product.status
            }
        });
    } else {
        return res.json({
            result: product,
            msg: "code expired",
        });
    }
});

module.exports = router;