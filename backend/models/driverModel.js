const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
  {
    drivername: {
      type: String,
      required: true,
    },
    vehiclenumber: {
      type: String,
      required: true,
    },
    checkin: {
      type: Date,
      required: true,
    },
    checkout: {
      type: Date,
    },
    currentcars: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;
