const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true },
    products_id:String,
    products_name:String,
    description:String,
    price:Number,
    status:Boolean
},{_id : false , versionKey: false});

module.exports = mongoose.model('products', productSchema)