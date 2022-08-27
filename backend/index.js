const express = require("express");
require("dotenv").config();
const driverRoute = require("./routes/driverRoute");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
connectDB();
const PORT = process.env.PORT;

app.use("/api/drivers", driverRoute);

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.listen(PORT, console.log(`SERVER IS RUNNING AT ${PORT}`));
