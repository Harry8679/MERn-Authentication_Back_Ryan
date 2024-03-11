const { check } = require('express-validator');

exports.userSignupValidator = [
    check('name').not().isEmpty().whitelist('Name is required')
];