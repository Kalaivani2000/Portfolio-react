import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LightDarkMode from "./LightDarkMode";

const Demonavbar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (
    <>
    {/* <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    ></Navbar> */}
      <Navbar collapseOnSelect expand="md" fixed="top"  className={navColour ? "sticky" : "navbar"}>
        <Container>
          <updateNavbar/>
          <Navbar.Brand
            eventKey={5}
            href="#home"
            style={{ fontSize: "2rem", marginLeft: "50px" }}
          >
            Kalaivani
          </Navbar.Brand>
          {/* <LightDarkMode/> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" i class="fa-solid fa-bars"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}/>
           <span></span>
          <span></span>
          <span></span>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link eventKey={2} href="#home"> 
                Home
              </Nav.Link>
              </Nav.Item>

              <Nav.Item>
              <Nav.Link eventKey={2} href="#about"> 
                About
              </Nav.Link>
              </Nav.Item>

              <Nav.Item>
              <Nav.Link eventKey={2} href="#projects">
                Projects
              </Nav.Link>
              </Nav.Item>

              <Nav.Item>
              <Nav.Link eventKey={2} href="#resume"> 
                Resume
              </Nav.Link>
              </Nav.Item>

              <Nav.Item>
              <Nav.Link eventKey={2} href="#contact">
                Contact
              </Nav.Link>
              </Nav.Item>
              
              {/* <Nav.Item>
              <Nav.Link eventKey={2} href="#"> */}
              <div id="google_translate_element"></div>
              {/* </Nav.Link>
              </Nav.Item> */}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Demonavbar;
