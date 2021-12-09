const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Users = require('../models/user_schema')
const crypto = require("crypto");

router.get('/', async (req, res) => {
    const doc = await Users.find({});
    res.json(doc);
});

router.get("/:username", async (req, res) => {
    const doc = await Users.find({ username: req.params.username });
    res.json(doc);
});

module.exports = router;