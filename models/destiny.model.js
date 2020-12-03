const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Destiny = new Schema({
  name: String,
  score: Number,
  image: String,
  description: String,
  cityId: Number
}, {
  collection: 'Destiny'
});

module.exports = mongoose.model('Destiny', Destiny);