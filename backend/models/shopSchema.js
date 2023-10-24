
 
 const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/LookOut')
    .then(()=> console.log('Connected to MongoDB'))
        .catch(err => console.log('Could not connect to MongoDB...',err));

const shopSchema = new mongoose.Schema({
    name: String,
    address: {
        city: String,
        state: String,
        pincode: Number
    },
    type: String,
    premium: {
        type:Boolean,
        default:false
    }
});

const Shop = mongoose.model('Shop',shopSchema);


module.exports = Shop;
