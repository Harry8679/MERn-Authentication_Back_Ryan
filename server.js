const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// import routes
const authRoutes = require('./routes/auth.route');

// Middlewares
app.use('/api/v1', authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`API is running on port ${port}`);
})