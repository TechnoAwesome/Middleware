const express = require('express');
const router = express.Router();

const {admin,login,register} = require('../controllers/userController');

/* user */
router.get('/login',login);
router.get('/register',register);
router.get('/admin',admin);

module.exports = router;