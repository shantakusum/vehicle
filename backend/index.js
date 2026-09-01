
const express = require("express");

const cors = require("cors");
const path = require("path")


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

app.listen(process.env.PORT || 8080, () => {
    console.log(" server is listening on port 8080");
})

