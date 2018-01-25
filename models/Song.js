var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var songSchema = new Schema({
  url: String,
  type: String
});

module.exports = mongoose.model('Song', songSchema);