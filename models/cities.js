var mongoose = require('mongoose');

var citySchema = mongoose.Schema({
  name: String,
  desc: String,
  img: String,
  temp_min: Number,
  temp_max: Number,
  coords_lon: Number,
  coords_lat: Number
})

var cityModel = mongoose.model('cities', citySchema)

module.exports = cityModel;