'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrderItems', [
      {
        quantity: 2,
        price: 25.50,
        productId: 1,
        orderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 1,
        price: 15.75,
        productId: 2,
        orderId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 3,
        price: 20.25,
        productId: 2,
        orderId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrderItems', null, {});
  }
};
