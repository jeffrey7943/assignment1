import axios from "axios";
import React, { useEffect, useState } from "react";

const CarPark = () => {
  const [driver, getDriver] = useState("");

  const drivers = async () => {
    const { data } = await axios.get("/api/drivers/carpark");
    getDriver(data);
  };

  useEffect(() => {
    drivers();
  });

  if (driver.length > 0) {
    return driver.map((driver) => {
      const d = new Date(driver.checkin);
      let date = d.toLocaleString();
      return (
        <tbody key={driver._id}>
          <tr>
            <th>{driver.drivername}</th>
            <th>{driver.vehiclenumber}</th>
            <th>{date}</th>
          </tr>
        </tbody>
      );
    });
  }
};

export default CarPark;
