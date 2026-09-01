'use strict';
//npx sequelize-cli seed:generate --name services
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Services', [

            {
                ServiceId: 1,
                FullName: 'Engine Repair',
                Category: 'Engine',
                Price: 2500.00,
                CreatedAt: new Date(),
                UpdatedAt: new Date()
            },

            {
                ServiceId: 2,
                FullName: 'Oil Change',
                Category: 'Maintenance',
                Price: 800.00,
                CreatedAt: new Date(),
                UpdatedAt: new Date()
            },

            {
                ServiceId: 3,
                FullName: 'Brake Repair',
                Category: 'Brakes',
                Price: 1500.00,
                CreatedAt: new Date(),
                UpdatedAt: new Date()
            },

            {
                ServiceId: 4,
                FullName: 'Tyre Replacement',
                Category: 'Tyres',
                Price: 3500.00,
                CreatedAt: new Date(),
                UpdatedAt: new Date()
            },

            {
                ServiceId: 5,
                FullName: 'Battery Replacement',
                Category: 'Electrical',
                Price: 4500.00,
                CreatedAt: new Date(),
                UpdatedAt: new Date()
            },

            {
                ServiceId: 6,
                FullName: 'AC Repair',
                Category: 'AC',
                Price: 2000.00,
                CreatedAt: new Date(),
                UpdatedAt: new Date()
            }

        ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
  }
};
