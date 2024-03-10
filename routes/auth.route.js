const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.json({
        data: 'This is the endpoint for registration'
    });
});

module.exports = router;