const jwt = require('jsonwebtoken');
const { User } = require('../models');

const authenticate = async (req, res, next) => {
    try {
        // Dapatkan token dari header Authorization
        let token = req.headers.authorization;
        // console.log(token)

        // Jika token tidak ada, kembalikan respon error
        if (!token) {
            return res.status(401).json({ message: 'Token is required' });
        }

        token = token.split(' ')[1];

        // Verifikasi token
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }

            // Dapatkan data user berdasarkan ID yang ada dalam token
            const user = await User.findByPk(decoded.userId);

            // Jika user tidak ditemukan, kembalikan respon error
            if (!user) {
                return res.status(401).json({ message: 'Invalid token' });
            }

            // Simpan data user di objek req.user untuk digunakan dalam middleware selanjutnya
            req.userSignin = {
                id: user.id,
                email: user.email,
                role: user.role
            };

            // Lanjutkan ke middleware atau controller selanjutnya
            next();
        });
    } catch (error) {
        next(error);
    }
};

module.exports = authenticate;
