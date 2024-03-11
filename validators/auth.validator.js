const { check } = require('express-validator');

exports.userSignupValidator = [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('email').not().isEmail().withMessage('Must be a valid email address'),
];