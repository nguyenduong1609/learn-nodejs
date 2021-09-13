const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, default: 'hahaha' },
  description: { type: String, maxlength: 600 },
  img: { type: String, maxlength: 300 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('khoahoc', Course);
