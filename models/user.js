'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Cart, { foreignKey: 'userId' });
      User.hasMany(models.Payment, { foreignKey: 'userId' });
      User.hasMany(models.Shipment, { foreignKey: 'userId' });
      User.hasMany(models.Wishlist, { foreignKey: 'userId' });
      User.hasMany(models.Order, { foreignKey: 'userId' });
    }
  }
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};