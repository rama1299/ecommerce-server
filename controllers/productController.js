const { Product, Category } = require('../models');

class ProductController {
    static async findAll(req, res, next) {
        try {
            const products = await Product.findAll({
                include: [
                    {
                        model: Category,
                        as: 'categories',
                        attributes: ['name']
                    }
                ]
            });

            if (products.length === 0) {
                throw { name: 'ErrorNotFound' };
            }

            res.status(200).json(products);
        } catch (error) {
            next(error);
        }
    }

    static async findById(req, res, next) {
        try {
            const { id } = req.params;

            const product = await Product.findByPk(id, {
                include: [
                    {
                        model: Category,
                        as: 'categories',
                        attributes: ['name']
                    }
                ]
            });

            if (!product) {
                throw { name: 'ErrorNotFound' };
            }

            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const { name, description, price, categoryIds } = req.body;

            // Buat produk baru
            const product = await Product.create({
                name,
                description,
                price
            });

            // Tambahkan kategori yang terkait dengan produk
            if (categoryIds && categoryIds.length > 0) {
                await product.addCategories(categoryIds);
            }

            res.status(201).json(product);
        } catch (error) {
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            const { id } = req.params;
            const { name, description, price, categoryIds } = req.body;

            // Perbarui produk
            const [updatedRows] = await Product.update(
                {
                    name,
                    description,
                    price
                },
                {
                    where: { id }
                }
            );

            if (updatedRows === 0) {
                throw { name: 'ErrorNotFound' };
            }

            // Hapus semua kategori yang terkait dengan produk
            const product = await Product.findByPk(id);
            await product.removeCategories();

            // Tambahkan kategori yang terkait dengan produk
            if (categoryIds && categoryIds.length > 0) {
                await product.addCategories(categoryIds);
            }

            res.status(200).json({ message: 'Product updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.params;

            // Hapus produk berdasarkan ID
            const deletedRows = await Product.destroy({
                where: { id }
            });

            if (deletedRows === 0) {
                throw { name: 'ErrorNotFound' };
            }

            res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ProductController;
