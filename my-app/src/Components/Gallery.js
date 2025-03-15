import slide1 from "../assets/Dining1.jpg";
import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import NavigationBar from "./Navbar";
import ROOM from "../assets/ROOM.jpg";
import ROOM1 from "../assets/ROOM1.jpg";
import ROOM2 from "../assets/ROOM2.jpg";
import ROOM3 from "../assets/ROOM3.jpg";
import ROOM4 from "../assets/ROOM4.jpg";
import ROOM5 from "../assets/ROOM5.jpg";
import dining1 from "../assets/Dining1.jpg";
import dining2 from "../assets/Dining2.jpg";
import dining3 from "../assets/Dining3.jpg";
import dining4 from "../assets/dining4.webp";
import dining5 from "../assets/dining5.jpeg";
import dining6 from "../assets/dining5.avif";
import reception from "../assets/reception.jpg";
import reception1 from "../assets/reception1.jpg";
import reception2 from "../assets/reception2.jpg";
import area from "../assets/area.jpg";
import area1 from "../assets/area1.jpg";
import area2 from "../assets/area2.jpg";
import GalleryFacilities from "./GalleryFacilities";
import Footer from "./Footer"
const ImageCard = ({ src }) => {
  return (
    <Col md={4} sm={6} className="mb-4">
      <Card className="image-card">
        <Image src={src} fluid rounded className="image-hover" />
      </Card>
    </Col>
  );
};

const Images = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5 display-4 fw-bold text-primary">Our Exquisite Hotel Gallery</h2>

      <h3 className="mt-5 text-secondary fw-semibold">Luxurious Rooms</h3>
      <Row>
        {[ROOM, ROOM1, ROOM2, ROOM3, ROOM4, ROOM5].map((image, index) => (
          <ImageCard key={index} src={image} />
        ))}
      </Row>

      <h3 className="mt-5 text-secondary fw-semibold">Grand Reception</h3>
      <Row>
        {[reception, reception1, reception2].map((image, index) => (
          <ImageCard key={index} src={image} />
        ))}
      </Row>

      <h3 className="mt-5 text-secondary fw-semibold">Fine Dining Experience</h3>
      <Row>
        {[dining1, dining2, dining3,dining4,dining5,dining6].map((image, index) => (
          <ImageCard key={index} src={image} />
        ))}
      </Row>

      <h3 className="mt-5 text-secondary fw-semibold">Serene Outdoor Spaces</h3>
      <Row>
        {[area, area1, area2].map((image, index) => (
          <ImageCard key={index} src={image} />
        ))}
      </Row>
    </Container>
  );
};

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        background: `url(${slide1}) no-repeat center center`,
        backgroundSize: "cover",
        padding: "150px 0",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.6)",
        }}
      ></div>
      <Container style={{ position: "relative", zIndex: 1 }}>
        <Row className="text-center text-white">
          <Col>
            <h1 className="display-2 fw-bold text-uppercase">
              Discover <span style={{ color: "#FFD700" }}>Luxury</span>
            </h1>
            <p className="lead mb-4 fs-4">
              Indulge in elegance and comfort. Experience world-class hospitality with us.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const Gallery = () => {
  return (
    <>
      {/* <NavigationBar /> */}
      <HeroSection />
      <Images />
      <style>
        {`
          .image-hover {
            transition: transform 0.3s ease-in-out;
          }
          .image-hover:hover {
            transform: scale(1.08);
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
          }
          .image-card {
            overflow: hidden;
            border-radius: 12px;
            box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
            transition: transform 0.3s ease-in-out;
          }
          .image-card:hover {
            transform: translateY(-5px);
          }
          .hero-section {
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
          }
        `}
      </style>
      <GalleryFacilities/>
      <br></br>
      <Footer/>
    </>
  );
};

export default Gallery;


