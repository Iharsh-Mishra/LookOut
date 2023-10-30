const mongoose = require('mongoose');
const product = require('../models/productSchema');
// const validate = require('Joi');


exports.addProduct = async(req,res,next)=>{
    const {name,description,type,shopId,price} = req.body;
    console.log(name);
    let tempName = name;
    const availPrice = [[shopId,price]];
    const productName = await product.find({name:tempName});
    
    let newProduct;
    if(productName.length == 0){
        newProduct = await product.create({name:tempName,description: description,type: type,available:{shops:availPrice}});
        res.send(newProduct);
    }
    else{

        productName[0].available.shops.push([shopId,price]);
        productName[0].save().then("Sucessful").catch("Not sucessful");
    }
    
    res.send("Sucessful");

    
};

exports.getProduct = async(req,res,next)=>{
    const allproduct = await product.find();
    res.send(allproduct);
};

exports.updateProduct = async(req,res,next)=>{

    const idOwner  = req.body._idOwner;
    const idProduct = req.body._idProduct;
    const tobeupdated = await product.findById(idProduct);
    console.log(tobeupdated);

    
    if(req.body.description != null){
        tobeupdated.description = req.body.description;
    }
    if(req.body.type != null){
        tobeupdated.type = req.body.type;
    }
    if(req.body.price != null){
        let prices = tobeupdated.available.shops;
        for(let i = 0;i<prices.length;i++){
            if(prices[i][0] == idOwner){
                
                tobeupdated.available.shops[i][1] = req.body.price;
               
                
            }
        }
    }

    tobeupdated.markModified("available");
    const  message = await tobeupdated.save().then("Updated sucessfully").catch("Not Sucessful") ;
    res.send(message);
};

exports.deleteProduct = async(req,res,next)=>{

    const idOwner  = req.body._idOwner;
    const idProduct = req.body._idProduct;

    const tobedeleted = await product.findById(idProduct);
    let tempShops = [];
    let prices = tobedeleted.available.shops;
    console.log(prices);
    for(let i = 0;i<prices.length;i++){
        if(prices[i][0] != idOwner){
            tempShops.push([prices[i][0],prices[i][1]]); 
        }
    }
    tobedeleted.available.shops = tempShops;
    tobedeleted.markModified("available");
    tobedeleted.save().then("Delete sucessful").catch("Delete unsucessful");
    console.log(tobedeleted);
    res.send(tobedeleted);
};


