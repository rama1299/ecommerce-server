'use strict';

const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@example.com',
        role: 'customer',
        password: await bcrypt.hash('password1', 10),
        address: '123 Main Street',
        phone_number: '555-1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'jane@example.com',
        role: 'customer',
        password: await bcrypt.hash('password2', 10),
        address: '456 Elm Street',
        phone_number: '555-5678',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
