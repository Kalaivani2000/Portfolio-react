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
        <h1 className="project-heading" style={{textAlign:"center" }}>
          Contact<strong className="purple">Us</strong>
        </h1>
        <Row> 
          <Col md={12}className="contact-sec" style={{ color: "white",textAlign:"center" }}>

            <h2>Address</h2>
            <p>Chennai,TamilNadu</p>
            {/* <span>9092983891</span> */}
          </Col>
          
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Kalaivani2000/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kalaivani-c-profile/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:kalaivani.c2000@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
