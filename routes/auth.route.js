const express = require('express');
const { signup } = require('../controllers/auth.controller');
const router = express.Router();

// import validators
const { userSignupValidator } = require('../validators/auth.validator');
const { runValidator } = require('../validators/index.validator');

router.post('/signup', userSignupValidator, runValidator, signup);

module.exports = router;