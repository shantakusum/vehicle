'use strict';
//npx sequelize-cli seed:generate --name mechanics
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const mechanics = [];

        const statuses = [
            'Available',
            'Busy',
            'Offline'
        ];

        for (let i = 1; i <= 20; i++) {

            mechanics.push({
                MechanicId: i,
                Name: `Mechanic ${i}`,
                Phone: `912345${String(i).padStart(4, '0')}`,
                Status: statuses[(i - 1) % statuses.length],
                JobsCompleted: Math.floor(Math.random() * 100),
                CreatedAt: new Date(),
                UpdatedAt: new Date()
            });

        }

        await queryInterface.bulkInsert('Mechanics', mechanics);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Mechanics', null, {});
  }
};
