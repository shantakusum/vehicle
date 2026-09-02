
const express = require("express");

const cors = require("cors");
const path = require("path")
const https = require('https');
const fs = require('fs');


const router= require('./routes/index.route');
const app = express();

app.use((req, res, next) => {
    console.log("!!! GLOBAL HIT !!! -> Method:", req.method, "URL:", req.url);
    next();
});


app.use(cors());
app.use(express.json());     // ye Express ka built-in middleware hai. Isliye tumhe req, res, next khud likhne ki zarurat nahi padti.


app.use(express.static(path.join(__dirname, 'public')));   // public folder ke andar rakhi files ko browser directly access kar sakta hai.



app.use('/api', router );

const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert.pem'))
};

// 2. Create the HTTPS server passing your Express app as the handler
const server = https.createServer(sslOptions, app);


server.listen(process.env.PORT || 8080, '0.0.0.0', () => {
    console.log(" server is listening on port 8080");
});

// app.listen(process.env.PORT || 8080, () => {
//     console.log(" server is listening on port 8080");
// })

