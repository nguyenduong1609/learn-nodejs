const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/f8_database');
    console.log('connect successfully !!!!!');
  } catch (error) {
    console.log('connect false !!!!!');
  }
}

module.exports = { connect };
