const express = require('express');
const { addProduct, getProduct, updateProduct, deleteProduct } = require('../controller/productController');
const router = express.Router();



router.route('/add').post(addProduct);
router.route('/home').get(getProduct);
router.route('/update').put(updateProduct);
router.route('/delete').delete(deleteProduct);

module.exports = router;