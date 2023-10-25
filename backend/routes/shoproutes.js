const express = require('express');
const {registerShop, getShop, updateShop, deleteShop } = require('../controller/shopController');
const router = express.Router();


// router.post('/',)
router.route('/register').post(registerShop);
router.route('/home').get(getShop);
router.route('/update').put(updateShop);
router.route('/delete').delete(deleteShop);

module.exports = router;