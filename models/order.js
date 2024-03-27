'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: 'userId' });
      Order.belongsTo(models.Shipment, { foreignKey: 'shipmentId' });
      Order.hasMany(models.OrderItem, { foreignKey: 'orderId' });
      Order.belongsTo(models.Payment, { foreignKey: 'paymentId' });
    }
  }
  Order.init({
    order_date: DataTypes.DATE,
    total_price: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER,
    shipmentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};