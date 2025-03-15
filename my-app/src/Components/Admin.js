
import React, { useState } from "react";
import { Button, Container, Row, Col, Nav } from "react-bootstrap";
import { FaUsers, FaCalendarAlt, FaBed, FaBars } from "react-icons/fa";
import Users from "./ManageUser";
import Bookings from "./ManageBookings";
import Rooms from "./ManageRoom";
import "./Admin.css";

export default function CarAdminDashboard() {
  const [activeTab, setActiveTab] = useState("users");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return <Users />;
      case "bookings":
        return <Bookings />;
      case "queries":
        return <Rooms />;
      default:
        return <Users />;
    }
  };

  return (
    <div className="admin-dashboard">
      <div className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <Button variant="link" className="sidebar-toggle" onClick={toggleSidebar}>
            <FaBars size={20} />
          </Button>
          <h3 className="sidebar-title">Admin Panel</h3>
        </div>
        <Nav className="flex-column">
          <Nav.Link
            className={`sidebar-link ${activeTab === "users" ? "active" : ""}`}
            onClick={() => handleTabChange("users")}
          >
            <FaUsers className="sidebar-icon" /> {!sidebarCollapsed && "Users"}
          </Nav.Link>
          <Nav.Link
            className={`sidebar-link ${activeTab === "bookings" ? "active" : ""}`}
            onClick={() => handleTabChange("bookings")}
          >
            <FaCalendarAlt className="sidebar-icon" /> {!sidebarCollapsed && "Bookings"}
          </Nav.Link>
          <Nav.Link
            className={`sidebar-link ${activeTab === "queries" ? "active" : ""}`}
            onClick={() => handleTabChange("queries")}
          >
            <FaBed className="sidebar-icon" /> {!sidebarCollapsed && "Rooms"}
          </Nav.Link>
        </Nav>
      </div>

      <div className="main-content">
        <Container fluid>
          <Row>
            <Col>
             
            </Col>
          </Row>
          <Row>
            <Col>{renderContent()}</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}