// create a schema according to the docs and store it in it's own folder 
// the schema should describe the fields we have in our form and specify the data it can expect

var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  passwordConf: {
    type: String,
    required: true,
  }
});

var User = mongoose.model('User', UserSchema);
module.exports = User;