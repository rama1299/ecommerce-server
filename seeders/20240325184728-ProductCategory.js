'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductCategories', [
      {
        productId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 2,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductCategories', null, {});
  }
};
