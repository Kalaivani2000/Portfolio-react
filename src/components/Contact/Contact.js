import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Contact2 from "./Contact2";
const Contact = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Contact<strong className="purple">Us</strong>
        </h1>
        <Row>
          <Col md="6" className="contact-sec" style={{ color: "white" }}>
            <ul className="footer-icons">
              <li className="social2-icons">
                <a
                  href="https://github.com/Kalaivani2000"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social2-icons">
                <a
                  href="https://www.linkedin.com/in/kalaivani-c-profile/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social2-icons">
                <a
                  href="mailto:kalaivani.c2000@gmail.com"
                  style={{ color: "white" }}
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>

            <h2>Address</h2>
            <p>no.481,7th block,Mugappair-west,Chennai-37</p>
            <span>9092983891</span>
          </Col>

          <Col md="6" className="iframe">
            <Contact2 />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
