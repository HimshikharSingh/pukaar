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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Donation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);
  const [cause, setCause] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate a unique order ID
    const orderId = `ORDER_${new Date().getTime()}`;

    let data;
    if (anonymous) {
      data = {
        name: "Unknown Donor",
        amount,
        cause: "Anonymous",
      };
    } else {
      data = {
        name,
        email,
        amount,
        cause,
        phoneNumber,
      };
    }

    try {
      // Initiate transaction
      const response = await axios.post("/api/paytm/request", {
        amount,
        orderId,
      });

      const details = response.data;

      let form = document.createElement("form");
      form.style.display = "none";
      form.method = "post";
      form.action = "<TRANSACTION_URL>"; // replace with the Paytm transaction URL
      form.target = "_self";

      for (const key in details) {
        if (details.hasOwnProperty(key)) {
          var input = document.createElement("input");
          input.name = key;
          input.value = details[key];
          form.appendChild(input);
        }
      }

      document.body.appendChild(form);
      form.submit();
      form.remove();

      //router.push("/thank-you");
    } catch (error) {
      console.error("Error while submitting donation:", error);
    }
  };

  return (
    <div className="main-content site-wrapper-reveal">
      <Navbar />
      <Container style={{ marginTop: "30px", marginBottom: "280px" }}>
        <Row className="page-title-area">
          <Col md={6}>
            <h1 className="title text-black">Donation Page</h1>
            <Form className="about-area" onSubmit={handleSubmit}>
              <Form.Label className="title">Name</Form.Label>
              <FormControl
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-style"
              />
              <Form.Label className="title">Email</Form.Label>
              <FormControl
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-style"
              />
              <Form.Label className="title">Amount</Form.Label>
              <FormControl
                type="number"
                placeholder="Donation amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-style"
              />
              <Form.Label className="title">Cause</Form.Label>
              <Dropdown className="text-style" onSelect={setCause}>
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
              <Form.Label className="title">Phone Number</Form.Label>
              <FormControl
                type="tel"
                placeholder="Your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="text-style"
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
                className="btn-theme btn-gradient btn-slide"
                disabled={anonymous}
              >
                Donate
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
