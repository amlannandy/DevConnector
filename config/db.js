const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connection initialized!');
  } catch (error) {
    console.error(error.message);
    //Exit process in case of failure
    process.exit(1);
  }
};

module.exports = connectDB;