

const express = require('express');
const router = express.Router();
//const verifyToken  = require("../middleware/authMiddleware.js"); 

console.log("INDEX ROUTE FILE LOADED");
router.use((req, res, next) => {
    console.log("INDEX ROUTER HIT:", req.method, req.originalUrl);   //req.method = kya karna hai(GET, POST, DELETE, PUT), req.url = abhi kis path par ho(POST /checkEmail), req.originalUrl = client ne originally kya path manga tha(/v1/checkEmail)
    next();
});


//const user = require('../controllers/user.controller');
const auth = require('../controllers/auth.controller');
const vehicle = require('../controllers/vehicle.controller');
const vehicleDashboard = require('../controllers/dashboard.controller')


//auth
router.post("/login", auth.login);
router.post("/register", auth.register);
router.post("/checkEmail", auth.checkEmail);

//booking
router.get("/bookings", vehicle.getBooking);
router.post("/bookings", vehicle.postBooking);

//customer
router.get("/customers", vehicle.getCustomer);
router.post("/customers", vehicle.postCustomer);


router.get("/mechanic", vehicle.getMechanic);
router.post("/mechanic", vehicle.postMechanic);

router.get("/service", vehicle.getService);
router.post("/service", vehicle.postService);

router.get("/dashboard", vehicleDashboard.getDashboard);




module.exports = router;