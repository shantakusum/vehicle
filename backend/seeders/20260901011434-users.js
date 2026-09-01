'use strict';
//npx sequelize-cli seed:generate --name users
/**@type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     const users = [];

        for (let i = 1; i <= 50; i++) {

            users.push({
                UserId: i,
                FullName: `customer ${i}`,
                UserEmail: `customer${i}@test.com`,
                Password: 'password@123',
                Phone: `987654${String(i).padStart(4, '0')}`,
                CreatedAt: new Date(),
                UpdatedAt: new Date()
            });

        }

        await queryInterface.bulkInsert('Users', users);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
