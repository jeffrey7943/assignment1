import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const CarPark = () => {
  const [driver, getDriver] = useState("");

  const drivers = async () => {
    const { data } = await axios.get("/api/drivers/carpark");
    getDriver(data);
  };

  useEffect(() => {
    drivers();
  });

  const checkOut = async (id) => {
    const date = new Date();
    const checkout = date.toLocaleString();

    try {
      const { data } = await axios.put(`/api/drivers/${id}`, {
        checkout,
      });

      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

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
            <th>
              <Button
                variant="light"
                size="sm"
                onClick={(e) => checkOut(driver._id)}
              >
                CHECK OUT
              </Button>
            </th>
          </tr>
        </tbody>
      );
    });
  }
};

export default CarPark;
