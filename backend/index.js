const express = require('express');
const registerShop = require('./controller/shopController');
const shoprouter = require('./routes/shoproutes');

const app = express();


app.use(express.json());


app.use('/admin', shoprouter);


app.listen(3000,()=>{
    console.log("Listening at port 3000....");
});
