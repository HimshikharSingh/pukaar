import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Dropdown,
  Button,
} from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Careers = () => {
  const [form, setForm] = useState({
    opening: "",
    phone: "",
    email: "",
    resume: null,
    coverLetter: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setForm({
      ...form,
      resume: event.target.files[0],
    });
  };

  const handleDropdownChange = (eventKey, event) => {
    setForm({
      ...form,
      opening: eventKey,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement sending form data
    setSubmitted(true);
  };

  return (
    <div className="main-content site-wrapper-reveal">
      <Navbar />
      <Container style={{ marginTop: "30px", marginBottom: "280px" }}>
        <Row className="page-title-area">
          <Col md={6}>
            <h1 className="title text-black">Careers</h1>
            <Form className="about-area" onSubmit={handleSubmit}>
              <Form.Label className="title">Opening</Form.Label>
              <Dropdown onSelect={handleDropdownChange}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {form.opening || "Select a job opening"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Field Team">
                    Field Team
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="IT Team">IT Team</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Form.Label className="title">Phone Number</Form.Label>
              <FormControl
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={form.phone}
                onChange={handleInputChange}
                className="text-style"
              />
              <Form.Label className="title">Email</Form.Label>
              <FormControl
                type="email"
                name="email"
                placeholder="Your email address"
                value={form.email}
                onChange={handleInputChange}
                className="text-style"
              />
              <Form.Label className="title">Resume</Form.Label>
              <FormControl
                type="file"
                name="resume"
                onChange={handleFileChange}
                className="text-style"
              />
              <Form.Label className="title">Cover Letter</Form.Label>
              <FormControl
                as="textarea"
                name="coverLetter"
                placeholder="Your cover letter"
                value={form.coverLetter}
                onChange={handleInputChange}
                className="text-style"
              />
              <Button
                type="submit"
                className="btn-theme btn-gradient btn-slide"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Careers;
