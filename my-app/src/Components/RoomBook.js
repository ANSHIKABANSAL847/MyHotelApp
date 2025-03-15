import { useState } from "react";
import React from "react";
import { Container, Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./RoomBook.css";

const Room = ({ room }) => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [bookingData, setBookingData] = useState({
    roomType: room.type,
    priceOption: "",
    checkin: "",
    checkout: "",
    guests: 1,
  });

  const handleShowDetails = () => {
    navigate(`/room-details/${room.id}`, { state: { room } });
  };


  const handleBookingClose = () => setShowBooking(false);
  const handleBookingShow = () => setShowBooking(true);

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    console.log("Booking Data:", bookingData);

    const price = bookingData.priceOption === "withBreakfast" ? room.pricewithbreakfast : room.pricewithoutbreakfast;

    const payload = {
      roomType: bookingData.roomType,
      priceOption: bookingData.priceOption,
      price: price,
      checkin: bookingData.checkin,
      checkout: bookingData.checkout,
      guests: bookingData.guests,
    };

    console.log("Request Payload:", payload);

    // Validate payload
    if (!payload.roomType || !payload.priceOption || !payload.checkin || !payload.checkout || !payload.guests) {
      console.error('Validation failed: All fields are required');
      return;
    }

    // API call to save booking data
    try {
      const response = await axios.post('http://localhost:5000/bookings', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Booking successful:', response.data);
      // Handle successful booking (e.g., show a success message, redirect, etc.)
    } catch (error) {
      if (error.response) {
        console.error('Error response data:', error.response.data);
      } else {
        console.error('Error during booking:', error.message);
      }
      // Handle error (e.g., show an error message)
    }

    handleBookingClose();
  };

  return (
    <Container className="mt-5">
      <Row className="g-4 flex-column">
        <Col key={room.type} className="d-flex justify-content-center">
          <Card className="p-3 d-flex flex-row align-items-center w-100" style={{ borderRadius: "15px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
            <Card.Img variant="left" src={room.images && room.images.length > 0 ? room.images[0] : room.image} alt={room.type} style={{ borderRadius: "10px", width: "400px", height: "250px", objectFit: "cover" }} />
            <Card.Body className="ms-4 d-flex flex-column justify-content-center">
              <Card.Title className="fw-bold" style={{ fontSize: "1.5rem" }}>{room.type}</Card.Title>
              <p className="mb-1"><strong>Size:</strong> {room.size || "Not specified"}</p>
              <p className="mb-1"><strong>Price with Breakfast:</strong> {room.pricewithbreakfast || "Not specified"}</p>
              <p className="mb-3"><strong>Price without Breakfast:</strong> {room.pricewithoutbreakfast || "Not specified"}</p>
              <p className="mb-3"><strong>Bed Type:</strong> {room.bedType || "Not specified"}</p>

              <Button variant="info" size="lg" className="mt-2" onClick={handleShowDetails}>
                More Details
              </Button>
              <Button variant="primary" size="lg" className="mt-2" onClick={handleBookingShow}>
                Select Room
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Booking Form Modal */}
      <Modal show={showBooking} onHide={handleBookingClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleBookingSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Room Type</Form.Label>
              <Form.Control type="text" name="roomType" value={bookingData.roomType} readOnly />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price Option</Form.Label>
              <Form.Control as="select" name="priceOption" value={bookingData.priceOption} onChange={handleBookingChange} required>
                <option value="" disabled>Select Price Option</option>
                <option value="withBreakfast">With Breakfast - {room.pricewithbreakfast}</option>
                <option value="withoutBreakfast">Without Breakfast - {room.pricewithoutbreakfast}</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Check-in Date</Form.Label>
              <Form.Control type="date" name="checkin" value={bookingData.checkin} onChange={handleBookingChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Check-out Date</Form.Label>
              <Form.Control type="date" name="checkout" value={bookingData.checkout} onChange={handleBookingChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Number of Guests</Form.Label>
              <Form.Control type="number" name="guests" value={bookingData.guests} onChange={handleBookingChange} min="1" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Confirm Booking
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleBookingClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}


export default Room;


