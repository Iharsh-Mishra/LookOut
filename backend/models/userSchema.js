const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/LookOut')
    .then(()=> console.log('Connected to MongoDB'))
        .catch(err => console.log('Could not connect to MongoDB...',err));

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String, 
    address: {
        city: String,
        state: String,
        pincode: Number
    },
    gender:Boolean
    
    
});

const User = mongoose.model('Shop',userSchema);


module.exports = User;
