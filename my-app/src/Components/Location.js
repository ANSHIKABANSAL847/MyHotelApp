import React from "react";
import { Container, Row, Col, Card, ListGroup, Image } from "react-bootstrap";
import NavigationBar from "./Navbar";
import Footer from "./Footer";
import a from "../assets/1.jpg";

const Location = () => {
  return (
    <Container className="my-5">
      <Row className="g-4">
        {/* Hotel Address with Image */}
        <Col md={6}>
          <Card className="h-100 shadow-lg">
            <Card.Body>
              <Card.Title className="text-primary fs-4">🏨 Hotel Gopiraj Location</Card.Title>
              
              {/* Hotel Image */}
              <Image 
                src={a}  // Replace with actual image URL
                alt="Hotel Gopiraj"
                fluid
                rounded
                className="mb-3"
              />

              <Card.Text className="fs-5">
                <strong>Hotel Gopiraj</strong>
                <br />
                Hisar Rd, near Surkhab Chowk, Agarsain Colony,
                <br />
                Sirsa, Haryana 125055
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* How to Reach Section */}
        <Col md={6}>
          <Card className="h-100 shadow-lg">
            <Card.Body>
              <Card.Title className="text-primary fs-4">🛣️ How to Reach</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="fs-5">
                  <strong>From Sirsa Bus Stand (3 km):</strong>
                  <ul>
                    <li>Take an auto-rickshaw or taxi to Surkhab Chowk.</li>
                    <li>From Surkhab Chowk, walk 100m towards Hisar Road.</li>
                    <li>Hotel Gopiraj is on the left side.</li>
                  </ul>
                </ListGroup.Item>

                <ListGroup.Item className="fs-5">
                  <strong>From Sirsa Railway Station (4.5 km):</strong>
                  <ul>
                    <li>Take a cycle-rickshaw, auto-rickshaw, or taxi.</li>
                    <li>Head towards Agarsain Colony via Hisar Road.</li>
                    <li>Near Surkhab Chowk, you will find Hotel Gopiraj.</li>
                  </ul>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>


        {/* Enlarged Google Maps */}
        <Col md={12}>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title className="text-primary fs-4 text-center">📍 Location on Google Map</Card.Title>
              <div className="map-container" style={{ height: "500px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.431399548965!2d75.03392407461003!3d29.532928642626615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114db57b497df9%3A0x3a6a5f9ea087ddf0!2sOYO%2048542%20Hotel%20Capital!5e0!3m2!1sen!2sin!4v1738822294943!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ borderRadius: "10px" }}
                ></iframe>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Details */}
        <Col md={4}>
          <Card className="h-100 shadow-lg">
            <Card.Body>
              <Card.Title className="text-primary fs-4">📞 Contact Information</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="fs-5">
                  <strong>Phone:</strong> +91 98765 43210
                </ListGroup.Item>
                <ListGroup.Item className="fs-5">
                  <strong>Email:</strong> contact@gopirajhotel.com
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Business Hours */}
        <Col md={4}>
          <Card className="h-100 shadow-lg">
            <Card.Body>
              <Card.Title className="text-primary fs-4">⏰ Business Hours</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="fs-5">
                  <strong>Monday - Friday:</strong> 9:00 AM - 11:00 PM
                </ListGroup.Item>
                <ListGroup.Item className="fs-5">
                  <strong>Saturday - Sunday:</strong> 10:00 AM - 12:00 AM
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Nearby Attractions */}
        <Col md={4}>
          <Card className="h-100 shadow-lg">
            <Card.Body>
              <Card.Title className="text-primary fs-4">🌍 Nearby Attractions</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="fs-5">Surkhab Chowk (500m)</ListGroup.Item>
                <ListGroup.Item className="fs-5">Bansal Cinema (1.5 km)</ListGroup.Item>
                <ListGroup.Item className="fs-5">Deer Park Sirsa (4 km)</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

      

const Location1 = () => {
  return (
    <>
      {/* <NavigationBar /> */}
      <Location />
      <Footer />
    </>
  );
};

export default Location1;





