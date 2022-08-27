const asyncHandler = require("express-async-handler");
const Driver = require("../models/driverModel");

const getDriver = asyncHandler(async (req, res) => {
  const driver = await Driver.find({});
  res.json(driver);
});

const getCurrentCars = asyncHandler(async (req, res) => {
  const cars = await Driver.find({ currentcars: true }).exec();
  res.json(cars);
});

const checkInDriver = asyncHandler(async (req, res) => {
  const { drivername, vehiclenumber, checkin } = req.body;

  if (!drivername || !vehiclenumber || !checkin) {
    res.status(400);
    throw new Error("please fill all the fields");
  } else {
    const driver = await Driver.create({
      drivername,
      vehiclenumber,
      checkin,
      currentcars: true,
    });
    res.status(201).json(driver);
  }
});

const checkOutDriver = asyncHandler(async (req, res) => {
  const { checkout } = req.body;
  const driver = await Driver.findById(req.params.id);
  if (driver) {
    driver.checkout = checkout;
    driver.currentcars = false;
    const updatedDriver = await driver.save();
    res.json(updatedDriver);
  } else {
    res.status(404);
    throw new Error("driver not found");
  }
});

module.exports = {
  getDriver,
  getCurrentCars,
  checkInDriver,
  checkOutDriver,
};
