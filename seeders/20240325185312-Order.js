'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        order_date: new Date(),
        total_price: 120.50,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        order_date: new Date(),
        total_price: 85.75,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
