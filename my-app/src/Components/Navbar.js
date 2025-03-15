import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaUsers, FaPhone, FaBed, FaImages, FaMapMarkerAlt, FaUser } from "react-icons/fa"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import a from '../assets/logo.jpeg';

const NavigationBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow py-2">
      <Container fluid>  {/* ✅ Full Width Container */}
        {/* Brand Logo - Moved Left for Space */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-light custom-font fs-3 me-auto">
          <img
            src={a}
            alt="Hotel Logo"
            width="119"  
            height="60"
            className="d-inline-block align-top me-2"
          />
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center flex-wrap"> {/* Added flex-wrap for better responsiveness */}
            <Nav.Link as={Link} to="/" className="text-light fw-bold mx-2 fs-5 d-flex align-items-center justify-content-center">
              <FaHome className="me-1" size={18} /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-light fw-bold mx-2 fs-5 d-flex align-items-center justify-content-center">
              <FaInfoCircle className="me-1" size={18} /> AboutUs
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="text-light fw-bold mx-2 fs-5 d-flex align-items-center justify-content-center">
              <FaUsers className="me-1" size={18} /> Meetings
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-light fw-bold mx-2 fs-5 d-flex align-items-center justify-content-center">
              <FaPhone className="me-1" size={18} /> ContactUs
            </Nav.Link>
            <Nav.Link as={Link} to="/rooms" className="text-light fw-bold mx-2 fs-5 d-flex align-items-center justify-content-center">
              <FaBed className="me-1" size={18} /> Rooms
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="text-light fw-bold mx-2 fs-5 d-flex align-items-center justify-content-center">
              <FaImages className="me-1" size={18} /> Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/location" className="text-light fw-bold mx-2 fs-5 d-flex align-items-center justify-content-center">
              <FaMapMarkerAlt className="me-1" size={18} /> Location
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-light fw-bold mx-2 fs-5 d-flex align-items-center justify-content-center">
              <FaUser className="me-1" size={18} /> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
