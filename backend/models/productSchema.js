const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/LookOut')
    .then(()=> console.log('Connected to MongoDB'))
        .catch(err => console.log('Could not connect to MongoDB...',err));


const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    type:String,
    available: {
        shops:Array
    }
    
});

const product = mongoose.model('Product',productSchema);


module.exports = product;
