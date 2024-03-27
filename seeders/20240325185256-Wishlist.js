'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Wishlists', [
      {
        userId: 1,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Wishlists', null, {});
  }
};
