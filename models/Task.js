var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  description: String,
  time: Number,
  day: String
});

module.exports = mongoose.model('Task', taskSchema);