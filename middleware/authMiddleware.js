const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET|| 'your_jwt_secret';

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Attach user info to request object
        next(); // Call the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token.' });
    }
};


module.exports = authMiddleware;