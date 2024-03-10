const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI, {})
            .then(() => console.log('DB Connected'))
            .catch((err) => console.log('DB Error => ', err));


// import routes
const authRoutes = require('./routes/auth.route');

// app middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
if ((process.env.NODE_ENV === 'development')) {
    app.use(cors());
}

// Middlewares
app.use('/api/v1', authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`API is running on port ${port} - ${process.env.NODE_ENV}`);
})