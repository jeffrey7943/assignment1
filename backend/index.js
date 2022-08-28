const express = require("express");
require("dotenv").config();
const driverRoute = require("./routes/driverRoute");
const connectDB = require("./config/db");
const path = require("path");

const app = express();
app.use(express.json());
connectDB();
const PORT = process.env.PORT;

app.use("/api/drivers", driverRoute);

__dirname = path.resolve();
if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API IS RUNNING");
  });
}

app.listen(PORT, console.log(`SERVER IS RUNNING AT ${PORT}`));
