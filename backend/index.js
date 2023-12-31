const express = require('express');
const registerShop = require('./controller/shopController');
const shoprouter = require('./routes/shoproutes');
const userrouter = require('./routes/userroutes');
const productrouter = require('./routes/productroutes');

const app = express();


app.use(express.json());


app.use('/admin', shoprouter);
app.use('/user',userrouter);
app.use('/product',productrouter);



app.listen(3000,()=>{
    console.log("Listening at port 3000....");
});
