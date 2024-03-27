const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthController {
    static async register(req, res, next) {
        try {
            const { first_name, last_name, email, password, address, phone_number } = req.body;

            if (!first_name || !last_name || !email || !password) {
                throw {name: 'InvalidCredentials'}
            }

            // Cek apakah email sudah digunakan
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already exists' });
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Buat user baru
            const user = await User.create({
                first_name,
                last_name,
                email,
                role: 'customer',
                password: hashedPassword,
                address,
                phone_number
            });

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            next(error);
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body;

            // Cari user berdasarkan email
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            // Cocokkan password
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (!isPasswordMatch) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            // Generate token
            const token = jwt.sign(
                { userId: user.id, email: user.email, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            res.status(200).json({ token });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AuthController;
