const express = require('express');
const { registerUser, getUser, updateUser, deleteUser } = require('../controller/userController');
const router = express.Router();



router.route('/register').post(registerUser);
router.route('/home').get(getUser);
router.route('/update').put(updateUser);
router.route('/delete').delete(deleteUser);

module.exports = router;