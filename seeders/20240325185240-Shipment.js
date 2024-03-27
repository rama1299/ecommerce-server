'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Shipments', [
      {
        shipment_date: new Date(),
        address: '123 Main Street',
        city: 'City',
        state: 'State',
        country: 'Country',
        zip_code: '12345',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        shipment_date: new Date(),
        address: '456 Elm Street',
        city: 'City',
        state: 'State',
        country: 'Country',
        zip_code: '54321',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Shipments', null, {});
  }
};
