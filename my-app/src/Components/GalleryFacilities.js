import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaParking, FaTshirt, FaGlassCheers } from "react-icons/fa";

const Gallery = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Our Facilities</h2>
      <Row className="g-4">
        <Col md={4}>
          <Card className="text-center shadow-sm p-3">
            <FaTshirt size={50} className="text-primary mx-auto" />
            <Card.Body>
              <Card.Title>Laundry Facilities</Card.Title>
              <Card.Text>Professional laundry services for your convenience.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm p-3">
            <FaGlassCheers size={50} className="text-success mx-auto" />
            <Card.Body>
              <Card.Title>Kitty Hall</Card.Title>
              <Card.Text>A cozy space for small gatherings and kitty parties.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm p-3">
            <FaParking size={50} className="text-danger mx-auto" />
            <Card.Body>
              <Card.Title>Safe Car Parking</Card.Title>
              <Card.Text>24/7 secure parking for a hassle-free stay.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
