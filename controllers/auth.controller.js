const User = require('../models/user.model');

exports.signup = (req, res) => {
 
    const { name, email, password } = req.body;
 
    User.findOne({ email })
        .then(user => {
            if (user) {
                return res.status(400).json({
                    error: 'Email is taken'
                });
            } else {
                let newUser = new User({ name, email, password });
 
                newUser.save().then(() => {
                    res.json({
                        message: 'Signup success! Please signin'
                    });
 
                }).catch((err) => {
                    console.log('SIGNUP ERROR', err);
                    return res.status(400).json({
                        error: err
                    })
                })
 
            }
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({
                error: 'Internal server error'
            });
        });
};

// module.exports = { signup };