const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.get('/api/signup', (req, res) => {
    res.json({
        data: 'This is the endpoint for registration'
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`API is running on port ${port}`);
})