const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name:{type:String , required: true},
    city:{type:String , required:true},
    ItemsArray:{type:Number, required:true}

});

const itemSchema = new mongoose.Schema({
    name:{type:String , required:true},
    price:{type:Number, required:true}

});

module.exports = mongoose.model("restaurant",restaurantSchema);
module.exports = mongoose.model("item",itemSchema);


