const express = require('express');
const router = express.Router();
const Report = require('../models/report_schema');

router.get('/', async (req, res) => {
    const doc = await Report.find({});
    res.json(doc);
});

router.post("/", async (req, res) => {
    console.log(JSON.stringify(req.body));
    const trackingNumber = (pr = "TID-") => {
        for(let i=0; i<7; i++) pr += ~~(Math.random() * 10);
        return pr;
    };
    req.body.track_id = await trackingNumber()
    const doc = await Report.create(req.body);
    res.json(doc);
});

router.get("/:track_id", async (req, res) => {
    const doc = await Report.find({ track_id: req.params.track_id });
    res.json(doc);
});

module.exports = router;