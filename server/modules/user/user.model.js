const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name  : String,
    last_name   : String,
    email       : String,
    phone       : String
});

const UserModel = mongoose.model('user',UserSchema);
  
module.exports = UserModel;