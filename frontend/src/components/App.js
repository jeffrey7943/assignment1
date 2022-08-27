import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import TableDesign from "./TableDesign";

const App = () => {
  const [drivername, setDriverName] = useState("");
  const [vehiclenumber, setVehicleNumber] = useState("");
  const [checkin, setCheckIn] = useState("");

  const registerDriver = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/drivers/create", {
        drivername,
        vehiclenumber,
        checkin,
      });

      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <Container>
      <Row>
        <Form onSubmit={registerDriver}>
          <Form.Group className="mb-3">
            <Form.Label>DRIVER NAME</Form.Label>
            <Form.Control
              type="text"
              value={drivername}
              onChange={(e) => setDriverName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>VEHICLE NUMBER</Form.Label>
            <Form.Control
              type="text"
              value={vehiclenumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>CHECK IN TIME</Form.Label>
            <Form.Control
              type="datetime-local"
              value={checkin}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mb-3">
            REGISTER
          </Button>
        </Form>
        <TableDesign />
      </Row>
    </Container>
  );
};

export default App;
