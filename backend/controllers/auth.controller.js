const db = require('../models/index.model');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
module.exports =  {
        register: async(req, res) => {
            try{
                const{ FullName, UserEmail, Password, Phone } = req.body;
                const hashedPassword = await bcrypt.hash(Password, 10);
                const user = await db.User.create({  
                    FullName,
                    UserEmail, 
                    Password: hashedPassword, 
                    Phone 
                });
                res.json(user);
            }catch(err){
                console.log(err);
            }   
        },

        login: async(req, res) => {
            try{
                const{ UserEmail, Password } = req.body;
                const user = await db.User.findOne({                //findOne only ek object {} return krta hai 
                    where:{
                        UserEmail: UserEmail
                    }
                })
                if(!user){
                    return res.status(404).json({
                        message: "user not found"
                    })
                } 
                 // password check
                const isMatch = await bcrypt.compare(
                    Password,
                    user.Password   //hashed password
                );
                console.log("Entered Password:", Password);
                console.log("DB Hash:", user.Password);
                console.log("Password Match:", isMatch);                                                                  // true or false
                if (!isMatch) {
                     return res.status(401).json({
                        message: "Invalid password"
                    });
                }
                // JWT token
                const token = jwt.sign(
                    {
                        Email: user.UserEmail,
                        
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1hr"
                    }
                );  
                // success
                return res.status(200).json({
                    message: "Login successful",
                    token,
                    user
                });
            }catch(error){
                return res.status(500).json({
                    message: error
                })
            }
        },
        checkEmail: async(req, res) => {
            try {
                const { UserEmail } = req.body;
                const user = await db.User.findOne({
                    where: {
                        UserEmail: UserEmail
                    }
                });
                 console.log("USER:", user);
                if (!user) {
                    return res.status(404).json({
                        message: "Email does not exist"
                    });
                }
                return res.status(200).json({
                    message: "Email exists"
                });
        
            } catch (error) {
                console.log(error);
                return res.status(500).json({
                    message: "Server error"
                });
            }
         }
}