const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },
    email: { type: 'string', required: true },
    firstname: { type: 'string', required: true },
    surname: { type: 'string', required: true },
    address: { type: 'string', default: null },
    tel: { type: 'string', default: null },
    level: { type: 'string', default: "customer" },
    created: { type: Date, default: Date.now },
});

userSchema.index({ email: 1 }, { unique: true });
module.exports = mongoose.model('users', userSchema);