import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Our Values Section
const OurValues = () => {
  return (
    <Container className="my-5 text-center">
      <h2 className="fw-bold mb-4" style={{ color: "#343a40" }}>Our Values</h2>
      <Row className="gy-4">
        {/* Main Value Card */}
        {/* <Col md={12}>
          <Card className="p-4 shadow"
            style={{
              border: "1px solid #6c757d",
              borderRadius: "15px",
              background: "linear-gradient(135deg, #f8f9fa, #ffffff)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <h3 className="fw-bold" style={{ color: "#343a40" }}>
              Our Aim & Purpose
            </h3>
            <p style={{ color: "#333", fontSize: "1.1rem", lineHeight: "1.6" }}>
              Our aim is to stand as a **forefront hotel**, providing 
              **unforgettable experiences** to everyone involved with us.
            </p>
            <p style={{ color: "#555", fontSize: "1rem", fontStyle: "italic" }}>
              Fueled by our fervor, our purpose is to craft distinct experiences 
              for our guests, all while adhering to **sustainable methods**.
            </p>
          </Card>
        </Col> */}

        {/* Core Values Cards */}
        <Col md={4}>
          <Card className="p-4 shadow h-100"
            style={{
              border: "1px solid #007bff",
              borderRadius: "15px",
              background: "#e3f2fd",
            }}>
            <h4 className="fw-bold" style={{ color: "#007bff" }}>Integrity</h4>
            <p style={{ color: "#333", fontSize: "1rem" }}>
              We uphold honesty, transparency, and ethical behavior in all we do.
            </p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-4 shadow h-100"
            style={{
              border: "1px solid #28a745",
              borderRadius: "15px",
              background: "#e6f9ed",
            }}>
            <h4 className="fw-bold" style={{ color: "#28a745" }}>Empathy</h4>
            <p style={{ color: "#333", fontSize: "1rem" }}>
              We listen and care deeply about the well-being of our guests and team.
            </p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-4 shadow h-100"
            style={{
              border: "1px solid #ffc107",
              borderRadius: "15px",
              background: "#fff8e1",
            }}>
            <h4 className="fw-bold" style={{ color: "#ffc107" }}>Teamwork</h4>
            <p style={{ color: "#333", fontSize: "1rem" }}>
              Collaboration is at our core, ensuring seamless service and hospitality.
            </p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-4 shadow h-100"
            style={{
              border: "1px solid #17a2b8",
              borderRadius: "15px",
              background: "#e0f7fa",
            }}>
            <h4 className="fw-bold" style={{ color: "#17a2b8" }}>Empowerment</h4>
            <p style={{ color: "#333", fontSize: "1rem" }}>
              We encourage growth and responsibility in our employees and guests.
            </p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-4 shadow h-100"
            style={{
              border: "1px solid #6f42c1",
              borderRadius: "15px",
              background: "#f3e5f5",
            }}>
            <h4 className="fw-bold" style={{ color: "#6f42c1" }}>Innovation</h4>
            <p style={{ color: "#333", fontSize: "1rem" }}>
              We embrace new ideas and technologies to enhance guest experiences.
            </p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-4 shadow h-100"
            style={{
              border: "1px solid #dc3545",
              borderRadius: "15px",
              background: "#f8d7da",
            }}>
            <h4 className="fw-bold" style={{ color: "#dc3545" }}>Excellence</h4>
            <p style={{ color: "#333", fontSize: "1rem" }}>
              We strive to exceed expectations and set high standards in hospitality.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OurValues;
