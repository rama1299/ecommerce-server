const { User, Cart, Payment, Shipment } = require('../models');

class UserController {
    static async findAll(req, res, next) {
        try {
            const users = await User.findAll({
                include: [Cart, Payment, Shipment]
            });

            if (users.length === 0) {
                throw { name: 'ErrorNotFound' };
            }

            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }

    static async findById(req, res, next) {
        try {
            const { id } = req.params;
            console.log(req.userSignin)

            if (req.userSignin.role === 'customer' && req.userSignin.id !== parseInt(id)) {
                throw { name: 'Unauthorized' };
            }

            const user = await User.findByPk(id, {
                include: [Cart, Payment, Shipment]
            });
    
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
    
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }
    
    static async update(req, res, next) {
        try {
            const { id } = req.params;
            const { first_name, last_name, email, role, password, address, phone_number } = req.body;

            if (!first_name || !last_name || !email) {
                throw {name: 'InvalidCredentials'}
            }

            if (req.userSignin.role === 'customer' && req.userSignin.id !== parseInt(id)) {
                throw { name: 'Unauthorized' };
            }

            const user = await User.findByPk(id);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
    
            await user.update({ first_name, last_name, email, role, password, address, phone_number });
            res.status(200).json({ message: 'User updated successfully' });
        } catch (error) {
            next(error);
        }
    }
    
    static async delete(req, res, next) {
        try {
            const { id } = req.params;

            if (req.userSignin.role === 'customer' && req.userSignin.id !== parseInt(id)) {
                throw { name: 'Unauthorized' };
            }

            const user = await User.findByPk(id);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
    
            await user.destroy();
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
    
}

module.exports = UserController;
