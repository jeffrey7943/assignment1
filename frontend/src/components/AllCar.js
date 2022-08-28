import axios from "axios";
import React, { useEffect, useState } from "react";

const AllCar = () => {
  const [driver, getDriver] = useState("");

  const drivers = async () => {
    const { data } = await axios.get("/api/drivers/");
    getDriver(data);
  };

  useEffect(() => {
    drivers();
  });

  if (driver.length > 0) {
    return driver.map((driver) => {
      const d = new Date(driver.checkin);
      let date = d.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
      let dtdate;
      if (driver.checkout == null) {
        dtdate = "NOT CHECKED OUT";
      } else {
        const dt = new Date(driver.checkout);
        dtdate = dt.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
        console.log(dtdate);
      }

      return (
        <tbody key={driver._id}>
          <tr>
            <th>{driver.drivername}</th>
            <th>{driver.vehiclenumber}</th>
            <th>{date}</th>
            <th>{dtdate}</th>
          </tr>
        </tbody>
      );
    });
  }
};

export default AllCar;
