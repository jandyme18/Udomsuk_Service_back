const mongoose = require('mongoose');

const discountSchema = mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true },
    code: { type: String, require: true, unique: true },
    isPercent: { type: Boolean, require: true, default: true },
    amount: { type: Number, required: true }, // if is percent, then number must be ≤ 100, else it’s amount of discount
    isActive: { type: Boolean, require: true, default: true }
},{_id : false , versionKey: false});

module.exports = mongoose.model('discounts', discountSchema)