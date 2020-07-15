//Require the mongoose package
const mongoose = require('mongoose');

//Define the schema object
const Schema = mongoose.Schema;

//Set the schema for an exercise
const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

//Define the exercise type
const Exercise = mongoose.model('Exercise', exerciseSchema);

//Export exercise to allow other files to use it
module.exports = Exercise;