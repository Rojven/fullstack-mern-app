import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: 'Такого пользователя не существует!'});

        const correctPassword = await bcrypt.compare(password, existingUser.password);

        if(!correctPassword) return res.status(400).json({ message: "Неверный пароль!"});

        const JWT_SECRET = process.env.JWT_SECRET;

        const token = jwt.sign({ 
            email: existingUser.email, 
            id: existingUser._id
        }, 
        JWT_SECRET, 
        { expiresIn: '1h'});

        res.status(200).json({ result: existingUser, token})
    } catch(err) {
        res.status(500).json({message: 'Ошибка сервера!'})
    }
}

export const signup = async (req, res) => {
   
}