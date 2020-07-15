//Require the package
const mongoose = require('mongoose');

//Define the type schema
const Schema = mongoose.Schema;

//Set the schema of user, the schema has one attribute named username
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

//Define the user type
const User = mongoose.model('User', userSchema);

//Allow other files to use this data type
module.exports = User;