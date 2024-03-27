const authorize = (roles) => {
    return (req, res, next) => {
        try {
            // Periksa apakah pengguna memiliki peran yang diperlukan untuk mengakses endpoint
            if (!req.userSignin || !roles.includes(req.userSignin.role)) {
                return res.status(403).json({ message: 'Unauthorized' });
            }

            // Lanjutkan ke middleware atau controller selanjutnya jika pengguna memiliki peran yang sesuai
            next();
        } catch (error) {
            next(error);
        }
    };
};

module.exports = authorize;
