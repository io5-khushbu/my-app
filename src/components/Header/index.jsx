import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/Icons/logo.png";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Header = () => {
  const navigate = useNavigate();
  const handleRedirectPage = (event, path) => {
    navigate(`/${path}`);
  };
  return (
    <>
      <Navbar expand="lg" className="back-color">
        <Container>
          <img src={Logo} alt="logo" id="logo" />
          <Navbar.Brand href="#home" className="font-family anv-indus">
            <strong>
              ANV <br />
              INDUSTRIES LTD.
            </strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="nav-sec">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto font-family ">
                <Nav.Link
                  className="home-part"
                  onClick={(e) => handleRedirectPage(e, "home")}
                >
                  HOME
                </Nav.Link>
                <NavDropdown
                  title="ABOUT US"
                  id="basic-nav-dropdown about"
                  onClick={(e) => handleRedirectPage(e, "about")}
                >
                  <NavDropdown.Item href="#action/3.1">OTHER</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  className="home-part"
                  onClick={(e) => handleRedirectPage(e, "infrastructre")}
                >
                  INFRASTRUCTURE
                </Nav.Link>
                <Nav.Link
                  className="home-part"
                  onClick={(e) => handleRedirectPage(e, "product")}
                >
                  PRODUCT
                </Nav.Link>
                <Nav.Link
                  className="home-part"
                  onClick={(e) => handleRedirectPage(e, "home")}
                >
                  ENQUIRY
                </Nav.Link>
                <Nav.Link
                  className="home-part"
                  onClick={(e) => handleRedirectPage(e, "contact")}
                >
                  CONTACTS
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
