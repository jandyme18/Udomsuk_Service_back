const express = require('express');
const router = express.Router();

router.use('/auth', require('../middleware/api_auth'));
router.use('/report', require('../middleware/api_report'));
router.use('/product', require('../middleware/api_product'));
router.use('/discount', require('../middleware/api_discount'));
router.use('/user', require('../middleware/api_user'));

//จริง ๆ แล้ว discount ต้องอยู่ในหน้า dashboard แต่ยังไม่ได้เริ่มก็เลยทำแบบนี้ไปก่อน
module.exports = router;