const mongoose = require('mongoose');
const Schema = mongoose.Schema({
  _id: Number,
  name: String,
  imageUrl: String,
  climate: String,
  budget: Number
},{
  collection: 'Cities'
})


module.exports = mongoose.model('City', Schema);