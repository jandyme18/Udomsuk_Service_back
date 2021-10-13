const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true },
    
},{_id : false , versionKey: false})

module.exports = mongoose.model('products', reportSchema)