const mongoose = require('mongoose');
const shop = require('../models/shopSchema');
// const validate = require('Joi');


exports.registerShop = async(req,res,next)=>{
    const {name,address,type,premium} = req.body;
    const newShop = await shop.create({name,address,type,premium});
    res.send(newShop);

    
};

exports.getShop = async(req,res,next)=>{
    const allshop = await shop.find();
    res.send(allshop);
};

exports.updateShop = async(req,res,next)=>{

    const id  = req.body._id;
    console.log(id);
    const tobeupdated = await shop.findById(id);
    console.log(tobeupdated);

    if(req.body.name != null){
        tobeupdated.name = req.body.name;
    }
    if(req.body.address != null){
        tobeupdated.address = req.body.address;
    }
    if(req.body.type != null){
        tobeupdated.type = req.body.type;
    }

    await tobeupdated.save().then("Updated sucessfully") ;
    res.send("Successful");
};

exports.deleteShop = async(req,res,next)=>{

    const id  = req.body._id;
    console.log(id);
    const tobedeleted = await shop.findByIdAndDelete(id);
    console.log(tobedeleted);
    res.send(tobedeleted);
};


