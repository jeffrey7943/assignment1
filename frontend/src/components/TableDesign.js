import React from "react";
import { Table } from "react-bootstrap";
import CarPark from "./CarPark";

const TableDesign = () => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>DRIVER NAME</th>
          <th>VEHICLE NUMBER</th>
          <th>CHECK IN TIME</th>
        </tr>
      </thead>
      <CarPark />
    </Table>
  );
};

export default TableDesign;
