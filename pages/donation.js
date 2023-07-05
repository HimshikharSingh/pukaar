import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Dropdown,
} from "react-bootstrap";
import { useRouter } from "next/router";

export default function Donation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState(0);
  const [cause, setCause] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      amount,
      address,
      dateOfBirth,
      age,
      cause,
      phoneNumber,
    };

    if (!anonymous) {
      await axios.post("https://my-backend-url/donations", data);
    }

    router.push("/thank-you");
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <h1>Donation Page</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Label>Name</Form.Label>
              <FormControl
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-3"
              />
              <Form.Label>Email</Form.Label>
              <FormControl
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-3"
              />
              <Form.Label>Amount</Form.Label>
              <FormControl
                type="number"
                placeholder="Donation amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mb-3"
              />
              <Form.Label>Address</Form.Label>
              <FormControl
                type="text"
                placeholder="Your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mb-3"
              />
              <Form.Label>Date of Birth</Form.Label>
              <FormControl
                type="date"
                placeholder="Your date of birth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="mb-3"
              />
              <Form.Label>Age</Form.Label>
              <FormControl
                type="number"
                placeholder="Your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="mb-3"
              />
              <Form.Label>Cause</Form.Label>
              <Dropdown onSelect={setCause}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {cause || "Select a cause"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Education">Education</Dropdown.Item>
                  <Dropdown.Item eventKey="Healthcare">
                    Healthcare
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Environmentalism">
                    Environmentalism
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Form.Label>Phone Number</Form.Label>
              <FormControl
                type="tel"
                placeholder="Your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mb-3"
              />
              <Form.Check
                type="checkbox"
                label="Donate anonymously"
                checked={anonymous}
                onChange={(e) => setAnonymous(e.target.checked)}
                className="mb-3"
              />
              <Button
                type="submit"
                className="btn btn-primary"
                disabled={anonymous}
              >
                Donate
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
