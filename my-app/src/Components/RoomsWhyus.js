import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { StarFill, ClockHistory, PersonCheckFill, ShieldCheck, CashStack, CupHot } from "react-bootstrap-icons";

const reasons = [
  { icon: <StarFill size={50} color="#FFD700" />, title: "Top-Rated Hospitality", text: "We offer world-class services with top-notch guest experiences." },
  { icon: <ClockHistory size={50} color="#007bff" />, title: "24/7 Service", text: "Round-the-clock assistance for a seamless stay." },
  { icon: <PersonCheckFill size={50} color="#28a745" />, title: "Customer Satisfaction", text: "We prioritize your happiness with unparalleled service." },
  { icon: <ShieldCheck size={50} color="#17a2b8" />, title: "Safe & Secure Stay", text: "Your safety is our priority with high-end security measures." },
  { icon: <CashStack size={50} color="#dc3545" />, title: "Affordable Luxury", text: "Enjoy a luxurious experience at an unbeatable price." },
  { icon: <CupHot size={50} color="#ff6347" />, title: "Complimentary Breakfast", text: "Start your day with a delicious meal, on us!" },
];

const WhyChooseUs = () => {
  return (
    <section
      style={{
        backgroundColor: "#e7ebec",
        padding: "60px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container className="text-center">
        <h2
          className="mb-5"
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#007bff",
          }}
        >
          Why Choose Us?
        </h2>
        <Row className="gy-4">
          {reasons.map((item, index) => (
            <Col key={index} md={4} sm={6} className="d-flex justify-content-center">
              <Card
                className="p-4 text-center"
                style={{
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                  width: "100%",
                  maxWidth: "350px",
                }}
              >
                <div className="mb-3">{item.icon}</div>
                <h4
                  style={{
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "15px",
                    fontSize: "1.5rem",
                  }}
                >
                  {item.title}
                </h4>
                <p style={{ color: "#555", fontSize: "1rem" }}>{item.text}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
