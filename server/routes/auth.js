const express = require('express');

const router = express.Router();
const authController = require('../api/controllers/auth');
/* GET home page. */
router.post('/auth/login', authController.signIn);

module.exports = router;
