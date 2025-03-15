import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useEffect } from "react";
import { Image } from "react-bootstrap";

import "./Home.css";

import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";
import instaLogo from "../assets/insta logo.png"; 
// Image Imports
import slide1 from "../assets/1.jpg";
import slide2 from "../assets/2.jpg";
import slide3 from "../assets/pixelcut-export.png";
import room1 from "../assets/4.jpg";
import room2 from "../assets/5.jpg";

import food1 from "../assets/6.jpg";
import fit from "../assets/fit.jpg";
import swim from "../assets/swim.jpg";
import bath from "../assets/bath.webp";
import dining from "../assets/dining4.webp";
import thali from "../assets/thali.PNG";
import dal from "../assets/dal.PNG";
import palak from "../assets/palak.PNG";
import chole from "../assets/chole.PNG";
import biryani from "../assets/biryani.PNG";
import { useNavigate } from "react-router-dom";

// Hero Section (Carousel)
function HeroSection() {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <img className="carousel-image" src={slide3} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={slide2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src={slide1} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

function WelcomeSection() {
  const navigate=useNavigate();
  return (
    <Container
      fluid
      className="text-center my-5 py-5 position-relative text-white"
       style={{
        backgroundImage: `url(${slide2})`,
         backgroundSize: "cover",
         backgroundPosition: "center",
         borderRadius: "15px",
         overflow: "hidden",
       }}
    >
      {/* Overlay for better readability */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(58, 53, 53, 0.6)",
          borderRadius: "15px",
        }}
      ></div>

      {/* Content Section */}
      <div className="position-relative">
        <h2 className="fw-bold display-4">Welcome to <span style={{ color: "#ffcc00" }}>Hotel GopiRaj</span></h2>
        <p className="lead mt-3 px-3 " style={{ fontSize: "1.6rem", maxWidth: "800px", margin: "0 auto" }}>
          Experience the perfect blend of <strong>luxury</strong>, <strong>comfort</strong>, and <strong>hospitality</strong>.  
          Nestled in the heart of Sirsa, Hotel GopiRaj offers elegant accommodations,  
          gourmet cuisine prepared by world-class chefs, and exceptional service that  
          ensures an unforgettable stay.
        </p>
        <p className="fst-italic fs-5">"Service so unforgettable, you'll never want to leave!"</p>
        <Button
          variant="warning"
          size="lg"
          className="mt-3 px-4 py-2 fw-bold"
          style={{ transition: "0.3s", borderRadius: "10px" }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          onClick={()=>navigate('/book1')}
        >
          Book Now
        </Button>
      </div>
    </Container>
  );
}

// Rooms Overview
function RoomsSection() {
    return (
      <div>
      
      
      <Container>
        <h2 className="text-center text-white">Our Rooms</h2>
        <Row className="mt-4">
          <Col md={6}>
            <Card className="room-card">
              <Card.Img variant="top" src={room1} className="room-image" />
              <Card.Body>
                <Card.Title>Deluxe Room</Card.Title>
                <Card.Text>Experience luxury with ocean views and premium service.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="room-card">
              <Card.Img variant="top" src={room2} className="room-image" />
              <Card.Body>
                <Card.Title>Executive Suite</Card.Title>
                <Card.Text>Unmatched comfort with world-class amenities.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
        </div>
    );
  }

// Dining Experience
function DiningSection() {
  return (
    <div className="dining-section text-center py-4">
      <h1 className="text-dark mb-1">Dining & Cuisine</h1>
      <p className="text-dark mb-4">Experience world-class gourmet dining with exquisite flavors.</p>

      {/* Main Dining Image */}
      <div className="dining-image-container mb-5">
        <img src={food1} className="dining-image rounded shadow-lg" alt="Dining Experience" />
      </div>

      {/* Cuisine Display Section */}
      <div className="d-flex flex-wrap justify-content-center gap-4">
        <div className="cuisine-card p-3 bg-dark text-white rounded shadow-lg">
          <img src={thali} alt="Super Deluxe Thali" className="cuisine-image rounded" />
          <h5 className="mt-2">Super Deluxe Thali</h5>
        </div>
        <div className="cuisine-card p-3 bg-dark text-white rounded shadow-lg">
          <img src={dal} alt="Dal Makhani" className="cuisine-image rounded" />
          <h5 className="mt-2">Dal Makhani</h5>
        </div>
        <div className="cuisine-card p-3 bg-dark text-white rounded shadow-lg">
          <img src={palak} alt="Paalak Paneer" className="cuisine-image rounded" />
          <h5 className="mt-2">Paalak Paneer</h5>
        </div>
        <div className="cuisine-card p-3 bg-dark text-white rounded shadow-lg">
          <img src={chole} alt="Chole" className="cuisine-image rounded" />
          <h5 className="mt-2">Chole</h5>
        </div>
        <div className="cuisine-card p-3 bg-dark text-white rounded shadow-lg">
          <img src={biryani} alt="Veg Biryani" className="cuisine-image rounded" />
          <h5 className="mt-2">Veg Biryani</h5>
        </div>
      </div>
   </div>
  );
}


// Facilities Section
function FacilitiesSection() {
  const facilities = [
    {
      name: "Fitness Center",
      description: "Stay active with our cutting-edge gym facilities.",
      img: fit,
    },
    {
      name: "Swimming Pool",
      description: "Take a refreshing dip in our luxurious pool.",
      img: swim,
    },
    
    {
      name: "Sauna & Jacuzzi",
      description: "Unwind in our sauna, jacuzzi, or hydrobath.",
      img: bath,
    },
    {
      name: "Gourmet Dining",
      description: "Experience exquisite flavors at our four restaurants - Ssence, Sampan, French Crust, and The Atrium Bar & Lounge.",
      img: dining,
    },
  ];

  return (
    <div className="facilities-section">
      <h2 className="section-title">Our Hotel Facilities</h2>
      <p className="section-subtitle">
        Experience the finest amenities designed for your comfort.
      </p>
      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <div key={index} className="facility-card">
            <div className="facility-image-container">
              <img src={facility.img} alt={facility.name} className="facility-image" />
            </div>
            <h4 className="facility-name">{facility.name}</h4>
            <p className="facility-description">{facility.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

  //Add this below in your desired render location to invoke MeetOurTeam:
  const InstagramEmbed = () => {
    const reels = [
      "https://www.instagram.com/reel/DC33DlvSQq_/?utm_source=ig_embed&amp;utm_campaign=loading",
    ];
  
    useEffect(() => {
      // Load Instagram Embed Script
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.instagram.com/embed.js";
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    useEffect(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }, [reels]);
  
    return (
      <Container className="my-5">
        <Row className="align-items-center">
          {/* Left Side - Enlarged Text & Logo */}
          <Col md={3} className="d-flex flex-column align-items-center align-items-md-start justify-content-center">
            <Image src={instaLogo} alt="Instagram" width={80} height={80} className="mb-3" />
            <h2 className="fw-bold text-center text-md-start">Follow us on Instagram</h2>
            <h5 className="text-center text-md-start mt-3">
              Stay updated with our latest posts and reels. Don't miss out on exciting content!
            </h5>
          </Col>
  
          {/* Instagram Reels */}
          <Col md={9}>
            <Row className="justify-content-center">
              {reels.map((reel, index) => (
                <Col key={index} md={6} sm={8} xs={12} className="d-flex justify-content-center">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={reel}
                    data-instgrm-version="14"
                    style={{
                      background: "#FFF",
                      border: "0",
                      borderRadius: "8px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                      margin: "10px",
                      maxWidth: "100%",
                      padding: "0",
                      width: "100%",
                      minHeight: "550px", // Increased height
                    }}
                  ></blockquote>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  };
  
// Testimonials Section

const Home = () => {
  return (
    <>
      {/* <NavigationBar /> */}
      <HeroSection />
      <WelcomeSection />
      
      <RoomsSection />
      <br></br>
      <DiningSection />
      <FacilitiesSection />
      <InstagramEmbed/>
      <Footer/>
    </>
  );
};

export default Home;

