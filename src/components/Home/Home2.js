import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Image1 from "../../Assets/kalai.pic.jpeg"
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I graduated one years ago with a degree in electronics and communication engineering and have completed a course as a front-end engineer. 
            I have a experience with HTML, along with CSS and JavaScript. I find these languages complement each other and 
            help me keep the main newsfeed looking fresh and sharp.<br/>
            I am a Front End developer with more than 8 month of hands-on intership.. I specialize in JavaScript and have 
            professional experience working on React. Understanding, assessing and taking up ownership of the 
            requirement and making sure it meets the expectations of all the stakeholders involved. Knowledgeable 
            of all the development cycle stages and have a good command of coding languages. Good experience in
             teamwork and excellent problem-solving skills
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={Image1} className="img-fluid"/>
            </Tilt>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
