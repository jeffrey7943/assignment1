const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGO DB DATABASE CONNECTED: ${conn.connection.host}`);
  } catch (error) {
    console.error(`ERROR :${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
