const db = require('../models/index.model')

module.exports = {
    getBooking: async(req, res) => {
        const bookingDetails = await db.Booking.findAll({
            include: [
                {
                    model: db.User
                },
                {
                    model: db.Mechanic
                },
                {
                    model: db.Service
                }
            ],
            order: [["BookingId", "DESC"]]
        });   //findAll array return krta hai [{}, {}]
        return res.json(bookingDetails)
    },
    postBooking: async(req, res) => {
        try{
            console.log(req.body);
            const{ UserId, MechanicId, ServiceId, Vehicle } = req.body;
            const booking = await db.Booking.create({
                  UserId,
                  MechanicId,
                  ServiceId,
                  Vehicle 
            });
            return res.status(201).json(booking);
            }catch(error){
                return res.status(500).json({
                    message: error.message
                })
            }   
    },
    getCustomer: async(req, res) => {
        const customerDetails = await db.User.findAll();   //findAll array return krta hai [{}, {}]
        return res.json(customerDetails)
    },
    
    postCustomer: async(req, res) => {
        try{
            console.log(req.body);
            const{ FullName, UserEmail, Password, Phone } = req.body;
            const user = await db.User.create({
                  
                FullName,
                UserEmail, 
                Password, 
                Phone 
            });
            return res.status(201).json(user);
            }catch(error){
                return res.status(500).json({
                    message: error.message
                })
            }   
    },
    getMechanic: async(req, res) => {
        const mechanicDetails = await db.Mechanic.findAll();   //findAll array return krta hai [{}, {}]
        return res.json(mechanicDetails)
    },
    postMechanic: async(req, res) => {
        try{
            const{  Name, Phone, Status } = req.body;
            
            const mechanic = await db.Mechanic.create({
                  
                Name,
                Phone, 
                Status
            });
                res.json(mechanic);
            }catch(error){
                return res.status(500).json({
                    message: error
                })
            }   
    },
    getService: async(req, res) => {
        const serviceDetails = await db.Service.findAll();   //findAll array return krta hai [{}, {}]
        return res.json(serviceDetails)
    },
    postService: async(req, res) => {
        try{
            const{ FullName, Category, Price } = req.body;
            
            const service = await db.Service.create({ 
                 
                FullName,
                Category, 
                Price
            });
                res.json(service);
        }catch(err){
            console.log(err);
        }   
    }
}