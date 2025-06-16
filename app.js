const express = require('express');
const app = express();
const dotenv = require('dotenv');
// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const authRoutes = require('./routes/authRoutes');
const preferencesRoutes = require('./routes/preferencesRoutes');
const newsRoutes = require('./routes/newsRoutes');

app.use ('/auth', authRoutes);
app.use('/user', preferencesRoutes); // Now /user/preferences is valid
app.use('/news', newsRoutes);

// Protected test route 
const authMiddleware = require('./middleware/authMiddleware');
app.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Hello ${req.user.email}, you are authenticated!' });
});
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;