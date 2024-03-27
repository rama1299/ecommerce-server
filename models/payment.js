'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payment.belongsTo(models.User, { foreignKey: 'userId' });
      Payment.belongsTo(models.Order, { foreignKey: 'orderId' });
    }
  }
  Payment.init({
    payment_date: DataTypes.DATE,
    payment_method: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};