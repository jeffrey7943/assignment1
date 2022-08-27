import React from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllCar from "./AllCar";

const AllCarTable = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>DRIVER NAME</th>
              <th>VEHICLE NUMBER</th>
              <th>CHECK IN TIME</th>
              <th>CHECK OUT TIME</th>
            </tr>
          </thead>
          <AllCar />
        </Table>
        <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
          <Button variant="primary" className="mt-3">
            BACK TO HOMEPAGE
          </Button>
        </Link>
      </Row>
    </Container>
  );
};

export default AllCarTable;
