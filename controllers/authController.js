const bycrpt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User ,finduserByEmail, addUser} = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

exports.signup = async (req, res) => {
    const { name, email, password } = req.body;

    if(finduserByEmail(email)) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bycrpt.hash(password, 10);
     const newUser = {id : Date.now(), name, email, password: hashedPassword };
    addUser(new user);

    res.status(201).json({ message: 'User created successfully' });

};

exports.login = async (req, res) => {   
    const{email, password} = req.body;

    const user = finduserByEmail(email);
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {expiresIn: '1h' }); 

    res.json({token});
};