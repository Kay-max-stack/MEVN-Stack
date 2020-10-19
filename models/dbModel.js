const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

const DB_Model = mongoose.model('dbModel', dbSchema);

module.exports = DB_Model;