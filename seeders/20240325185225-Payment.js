'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Payments', [
      {
        payment_date: new Date(),
        payment_method: 'Credit Card',
        amount: 100.50,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        payment_date: new Date(),
        payment_method: 'PayPal',
        amount: 75.25,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Payments', null, {});
  }
};
