import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillContacts,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import LightDarkMode from "./LightDarkMode";

export default function Demonavbar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  return (
    <div>
      <div
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <h2>Kalaivani</h2>&nbsp;
            <LightDarkMode/>
          </Navbar.Brand>
          {/* <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                {/* <Link
                  as={Link}
                  to="/"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Link> */}
              </Nav.Item>

              <Nav.Item>
                {/* <Link
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Link> */}
              </Nav.Item>

              <Nav.Item>
                {/* <Link
                  as={Link}
                  to="/project"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projects
                </Link> */}
              </Nav.Item>

              <Nav.Item>
                {/* <Link
                  as={Link}
                  to="/resume"
                  onClick={() => updateExpanded(false)}
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Link> */}
              </Nav.Item>

              <Nav.Item>
                {/* <NavLink 
                  as={Link}
                  to="/contact"
                  onClick={() => updateExpanded(false)} 
                > 
                  <AiFillContacts style={{ marginBottom: "2px" }} /> Contacts
                </NavLink> */}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </div>
    </div>
  );
}
