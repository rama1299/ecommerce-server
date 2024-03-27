'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Cart, { foreignKey: 'productId' });
      Product.hasMany(models.Wishlist, { foreignKey: 'productId' });
      Product.hasMany(models.OrderItem, { foreignKey: 'productId' });
      Product.belongsToMany(models.Category, { through: 'ProductCategory', foreignKey: 'productId', as: 'categories' });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};