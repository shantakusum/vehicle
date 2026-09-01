'use strict';
//npx sequelize-cli seed:generate --name bookings
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const bookings = [];

        const statuses = [
            'Pending',
            'Assigned',
            'Mechanic On The Way',
            'Completed',
            'Cancelled'
        ];

        const vehicles = [
            'Maruti Swift',
            'Hyundai i20',
            'Honda City',
            'Tata Nexon',
            'Mahindra XUV500',
            'Toyota Innova',
            'Kia Seltos',
            'Maruti Baleno'
        ];

        const servicePrices = {
            1: 2500,
            2: 800,
            3: 1500,
            4: 3500,
            5: 4500,
            6: 2000
        };

        for (let i = 1; i <= 500; i++) {

            const userId = Math.floor(Math.random() * 50) + 1;

            const serviceId = Math.floor(Math.random() * 6) + 1;

            const status =
                statuses[Math.floor(Math.random() * statuses.length)];

            let mechanicId = null;

            // Pending booking may not have a mechanic
            if (status !== 'Pending') {
                mechanicId = Math.floor(Math.random() * 20) + 1;
            }

            const vehicle =
                vehicles[Math.floor(Math.random() * vehicles.length)];

            const amount = servicePrices[serviceId];

            const createdAt = new Date(
                Date.now() -
                Math.floor(Math.random() * 180) * 24 * 60 * 60 * 1000
            );

            bookings.push({
                BookingId: i,
                UserId: userId,
                MechanicId: mechanicId,
                ServiceId: serviceId,
                Vehicle: vehicle,
                Status: status,
                Amount: amount,
                CreatedAt: createdAt,
                UpdatedAt: new Date()
            });
        }

        await queryInterface.bulkInsert('Bookings', bookings);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bookings', null, {});
  }
};
