const mongoose = require('mongoose');
const shop = require('../models/shopSchema');
// const validate = require('Joi');


exports.registerShop = async(req,res,next)=>{
    const {name,address,type,premium} = req.body;
    const newShop = await shop.create({name,address,type,premium});
    res.send(newShop);

    
};