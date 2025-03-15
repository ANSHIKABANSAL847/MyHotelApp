import React from "react";

import Footer from "./Footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import ab from "../assets/b1.jpg"; // Replace with actual image paths
import a from "../assets/p1.jpg";

const MeetingsEvents = () => {
  return (
    <section style={{ backgroundColor: "#f8f9fa", padding: "40px 0" }}>
      <Container>
        {/* First Card: Image on Left, Text on Right */}
        <Row className="align-items-center mb-5">
          {/* Left Image */}
          <Col xs={12} md={6} className="order-md-1">
            <img
              src={ab}
              alt="Ballroom"
              className="img-fluid rounded shadow"
              style={{ width: "100%" }}
            />
          </Col>

          {/* Right Content */}
          <Col xs={12} md={6} className="order-md-2">
            <Card className="p-4 shadow rounded bg-white">
              <div className="text-center">
                <i className="bi bi-droplet text-primary" style={{ fontSize: "2rem" }}></i>
                <h3 className="fw-bold mt-2">Ballroom</h3>
                <hr className="mx-auto" style={{ width: "50px", border: "2px solid #007bff" }} />
              </div>
              <Card.Text style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                Ballroom is our largest banquet hall, spanning 8000 square feet. It stands out as
                one of the premier wedding venues in Sirsa, offering exclusivity and elegance. With
                a capacity of up to 500 guests, it is ideal for hosting a variety of events, from
                dreamy wedding receptions to large-scale business conferences.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const MeetingsEventsSection = () => {
  return (
    <section style={{ backgroundColor: "#f8f9fa", padding: "40px 0" }}>
      <Container>
        {/* Second Card: Text on Left, Image on Right */}
        <Row className="align-items-center mb-5">
          {/* Left Content */}
          <Col xs={12} md={6} className="order-md-2">
            <img
              src={a}
              alt="Platinum"
              className="img-fluid rounded shadow"
              style={{ width: "100%" }}
            />
          </Col>

          {/* Right Content */}
          <Col xs={12} md={6} className="order-md-1">
            <Card className="p-4 shadow rounded bg-white">
              <div className="text-center">
                <i className="bi bi-droplet text-primary" style={{ fontSize: "2rem" }}></i>
                <h3 className="fw-bold mt-2">Platinum</h3>
                <hr className="mx-auto" style={{ width: "50px", border: "2px solid #007bff" }} />
              </div>
              <Card.Text style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                The Diamond Palace is an exquisite banquet hall in Sirsa, covering 6250 sq. ft. It
                is designed to host up to 250 guests, making it perfect for meetings and other
                professional events. The hall can also be divided into two separate spaces - Diamond
                Palace 1 and Diamond Palace 2. Diamond Palace 1 can accommodate up to 100 guests,
                while Diamond Palace 2 can host a maximum of 150 guests.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const Services = () => {
  return (
    <>
      <br />
      <h2 className="text-center fw-bold text-primary">
        Meeting & Events at The Gopiraj, Sirsa
      </h2>
      <p className="text-center mt-3" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
        Hotel Gopiraj in Sirsa is your ideal choice for conference venues, offering four versatile
        halls that can accommodate between 40 to 400 guests, tailored to the specific needs of your
        event. Our dedicated event managers are on hand to ensure every aspect of your event is
        seamlessly managed.
      </p>
      <MeetingsEvents />
      <MeetingsEventsSection />
      <Footer />
    </>
  );
};

export default Services;


