import slide1 from "../assets/Deluxe-1.jpg";
import { Container, Row, Col,  Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const HeroSection = ({ roomsRef }) => {
  const navigate = useNavigate();
    return (
      <section
        className="hero-section"
        style={{
          position: "relative",
          background: `url(${slide1}) no-repeat center center`,
          backgroundSize: "cover",
          padding: "120px 0",
        }}
      >
        {/* Dark Overlay */}
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
  
        {/* Content */}
        <Container style={{ position: "relative", zIndex: 1 }}>
          <Row className="text-center text-white">
            <Col>
              <h1 className="display-3 fw-bold">
                EXPERIENCE LUXURY AT <span style={{ color: "#FFD700" }}>OUR HOTEL</span>
              </h1>
              <p className="lead mb-4">
                Discover comfort, elegance, and world-class hospitality. Book your stay now.
              </p>
              <Button
                variant="warning"
                size="lg"
                className="fw-bold"
                onClick={() => navigate("/book1")}
              >
                Book Now
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };
 export default HeroSection;  