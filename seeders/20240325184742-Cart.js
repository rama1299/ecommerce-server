'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Carts', [
      {
        quantity: 2,
        userId: 1,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 1,
        userId: 1,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 3,
        userId: 2,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carts', null, {});
  }
};
