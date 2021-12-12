const express = require('express');
const router = express.Router();

router.use('/auth', require('../middleware/api_auth'));
router.use('/report', require('../middleware/api_report'));
router.use('/product', require('../middleware/api_product'));
module.exports = router;

