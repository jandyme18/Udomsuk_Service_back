const express = require('express');
const router = express.Router();

router.use('/auth', require('./api_auth'));
router.use('/report', require('./api_report'));

module.exports = router;