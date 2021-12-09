const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('../routes/jwt');
const Users = require('../models/user_schema');

//register
router.post('/register', async (req, res) => {
    try {
        console.log(JSON.stringify(req.body));
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const doc = await Users.create(req.body);
        res.json({ result: "success", details: doc });
    }
    catch (err) {
        res.json({ result: "error", details: err });
    }
});

//login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const doc = await Users.findOne({ email });

    if (doc) {
        const isPasswordValid = await bcrypt.compare(password, doc.password);
        if (isPasswordValid) {
            const payload = {
                id: doc._id,
                level: doc.level,
                username: doc.username,
                email: doc.email,
            };
            const token = jwt.sign(payload, "100h");
            res.json({
                result: "success",
                token,
                message: 'login success',
                payload
            });
        }
        else {
            res.json({ result: "failed", message: 'Invalid password' })
        }
    }
    else {
        res.json({ result: "failed", message: 'Invalid email' })
    }
});

module.exports = router;