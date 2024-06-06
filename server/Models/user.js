const mongoose = require('mongoose');

const UserSchema =new mongoose.Schema({
    username: {type: String, required: true, unique: true, minlength: 3},
    email: {type: String, required: true, unique: true, minlength: 11},
    password: {type: String, required: true, minlength: 3}
}, {timestamps: true});
const UserModel = mongoose.model('User',UserSchema);
module.exports = UserModel;