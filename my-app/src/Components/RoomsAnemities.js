import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Wifi, Tv, CupHot, HouseDoor, Shield, Snow } from "react-bootstrap-icons"; // Added new icons

const amenities = [
  { icon: <Wifi size={30} />, text: "Free WiFi" },
  { icon: <Tv size={30} />, text: "Smart TV" },
  { icon: <CupHot size={30} />, text: "Complimentary Breakfast" },
  { icon: <HouseDoor size={30} />, text: "Luxury Accommodation" },
  { icon: <Shield size={30} />, text: "24/7 Security" },
  { icon: <Snow size={30} />, text: "Air Conditioning" }, // New icon
  //{ icon: <Water size={30} />, text: "Swimming Pool Access" }, // New icon
];

const RoomAmenities = () => {
  return (
    <Container className="text-center my-5">
      <h2 className="mb-4">Room Amenities</h2>
      <Row>
        {amenities.map((item, index) => (
          <Col key={index} md={2} className="mb-3">
            {item.icon}
            <p>{item.text}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RoomAmenities;


