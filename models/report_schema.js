const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true },
    track_id:String,
    name:String,
    surname:String,
    car_no:String,
    car_brand:String,
    card_id:String,
    claim_id:String,
    company:String,
    tel:String,
    repair:[String],
    change:[String]
},{_id : false});

module.exports = mongoose.model('reports', reportSchema)