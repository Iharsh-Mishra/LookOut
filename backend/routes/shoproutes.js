const express = require('express');
const {registerShop } = require('../controller/shopController');
const router = express.Router();


// router.post('/',)
router.route('/home').post(registerShop);

module.exports = router;