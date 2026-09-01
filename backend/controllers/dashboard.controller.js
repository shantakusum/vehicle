const db = require('../models/index.model');

module.exports = {
    getDashboard: async(req, res) => {
        const totalCustomers = await db.User.count();
        const totalMechanics = await db.Mechanic.count();
        const totalBookings = await db.Booking.count();
        const completedBookings = await db.Booking.count({
            where: {
                Status: "Completed"
            }
        });

        const totalRevenue = await db.Booking.sum("Amount");
        return res.json({
            totalCustomers,
            totalMechanics,
            totalBookings,
            completedBookings,
            totalRevenue: totalRevenue || 0
        })
    }
}