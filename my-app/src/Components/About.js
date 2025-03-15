import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import slide1 from "../assets/front.jpg";
import slide2 from "../assets/logo.jpg";
import Navbar from "./Navbar";
import OurValues from "./AboutOurvalues";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
// Hero Section
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section
      className="hero-section text-center text-white d-flex align-items-center justify-content-center"
      style={{
        position: "relative",
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slide1}) no-repeat center center`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Container style={{ position: "relative", zIndex: 1 }}>
        <h1 className="display-3 fw-bold">
          Welcome to <span style={{ color: "#FFD700" }}>Our Hotel</span>
        </h1>
        <p className="lead">
          Luxury and comfort come together to create an unforgettable stay.
        </p>
        <Button variant="warning" size="lg" className="mt-3 shadow-lg" onClick={() => navigate("/book1")}>
          Book Your Stay
        </Button>
      </Container>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <img src={slide2} alt="Hotel" className="img-fluid rounded shadow" />
        </Col>
        <Col md={6}>
          <h2 className="fw-bold" style={{ color: "#333" }}>
            Welcome to Our Luxury Hotel
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#555" }}>
            Experience world-class hospitality with top-notch services and elegant accommodations. Our hotel offers a blend of modern comfort and classic charm, ensuring a memorable stay for our guests.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

// Customer Reviews Section with Slider
const CustomerReviews = () => {
  const reviews = [
    {
      name: "Maneesh Mishra",
      review: "Amazing experience! The staff was very courteous, and the ambiance was perfect.",
    },
    {
      name: "Sushil Aswal",
      review: "Loved the hospitality and cleanliness. Highly recommended!",
    },
    {
      name: "Cantabil Lawrence",
      review: "The rooms were spacious and well-maintained. Great value for money!",
    },
    {
      name: "Deshraj Verma",
      review: "A wonderful stay! The food was delicious and the service was top-notch.",
    },
  ];

  return (
    <Container className="my-5 text-center">
      <h2 className="fw-bold mb-4" style={{ color: "#333" }}>What Our Guests Say</h2>
      <Carousel indicators={false} controls={true}>
        {reviews.map((review, index) => (
          <Carousel.Item key={index}>
            <Card
              className="mx-auto p-4 shadow-lg"
              style={{ maxWidth: "600px", borderRadius: "15px", backgroundColor: "#f8f9fa" }}
            >
              <Card.Body>
                <Card.Title className="fw-bold" style={{ color: "#007bff" }}>
                  {review.name}
                </Card.Title>
                <Card.Text style={{ fontSize: "1.1rem", fontStyle: "italic" }}>
                  "{review.review}"
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

// Updated Hotel Features Section with Cards (Without Carousel)
const HotelFeatures = () => {
  const features = [
    {
      title: "Urban Luxury",
      content: "Immerse yourself in the elegance of urban luxury at our sanctuary, nestled in the vibrant heart of Sirsa. Recently revitalized, our accommodations offer a sophisticated retreat, perfectly blending modern amenities with unparalleled hospitality.",
    },
    {
      title: "Culinary Delights",
      content: "At The Gopiraj, Sirsa, we celebrate the profound bond between culinary art and affection. Embark on a gastronomic journey along our rooftop's Oriental path at ‘Sampan’, where an exquisite selection of Pan Asian dishes awaits to delight your palate.",
    },
    {
      title: "Luxurious Rooms & Suites",
      content: "Our guest rooms and suites are a testament to technological innovation and elegant design, adorned with cutting-edge facilities and chic decor. We are proud to offer premier conferencing and meeting spaces, accommodating events ranging from intimate gatherings to grand celebrations.",
    },
  ];

  return (
    <div className="my-5 text-center" style={{ backgroundColor: "#f8f9fa" }}>
      <h2 className="fw-bold mb-4" style={{ color: "#333" }}>Hotel Features</h2>
      <Row className="d-flex justify-content-center">
        {features.map((feature, index) => (
          <Col xs={12} md={4} key={index} className="mb-4">
            <Card className="shadow-lg" style={{ borderRadius: "15px", backgroundColor: "#fff" }}>
              <Card.Body>
                <Card.Title className="fw-bold" style={{ color: "#FFD700" }}>
                  {feature.title}
                </Card.Title>
                <Card.Text style={{ fontSize: "1.1rem", fontStyle: "italic" }}>
                  {feature.content}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

// Main About Us Page
const AboutUs = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <AboutSection />
      <HotelFeatures />
      <OurValues />
      <CustomerReviews />
      <Footer />
    </>
  );
};

export default AboutUs;








