const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    // 1. Header se token nikalein (Format standard: Bearer <token>)
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // [1] se sirf token milega

    if (!token) {
        return res.status(401).json({ message: "Access Denied. Token missing!" });
    }

    try {
        // 2. Token ko verify karein (Agar 3s beet gaye hain, toh ye error throw karega)
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        
        // Aapne jo payload sign kiya tha (Email, Role), wo ab req.user mein mil jayega
        req.user = verified; 
        
        next(); // Token sahi hai, toh aage jaane do
    } catch (err) {
        // 3. Agar 3s poore ho gaye hain, toh yeh block chalega
        // 401 status code bhejna zaroori hai taaki frontend samajh sake
        return res.status(401).json({ message: "Token Expired!" });
    }
};

module.exports = verifyToken ;
