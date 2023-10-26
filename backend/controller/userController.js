const mongoose = require('mongoose');
const User = require('../models/userSchema');
// const validate = require('Joi');


exports.registerUser = async(req,res,next)=>{
    const {name,email,password,address,gender} = req.body;
    const newUser = await User.create({name,email,password,address,gender});
    res.send(newUser);

    
};

exports.getUser = async(req,res,next)=>{
    const allusers = await User.find();
    res.send(allusers);
};

exports.updateUser = async(req,res,next)=>{

    const id  = req.body._id;
    const tobeupdated = await User.findById(id);
    if(req.body.address != null){
        tobeupdated.address = req.body.address;
    }

    await tobeupdated.save().then("Updated sucessfully") ;
    res.send("Successful");
};

exports.deleteUser = async(req,res,next)=>{

    const id  = req.body._id;
    const tobedeleted = await User.findByIdAndDelete(id);
    res.send(tobedeleted);
};


