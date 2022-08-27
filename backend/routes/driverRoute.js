const express = require("express");
const {
  checkInDriver,
  getDriver,
  getCurrentCars,
  checkOutDriver,
} = require("../controllers/driverController");

const router = express.Router();

router.route("/").get(getDriver);
router.route("/carpark").get(getCurrentCars);
router.route("/create").post(checkInDriver);
router.route("/:id").put(checkOutDriver);

module.exports = router;
