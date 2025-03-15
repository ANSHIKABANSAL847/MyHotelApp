
 // this page will show the list of rooms available in the hotel enter by the admin and uses roombook page 
import React, { useEffect, useState } from "react";
import axios from "axios";
import BookNow from "./RoomBook";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
const API_URL = "https://myhotelapp-2.onrender.com";
function Home() {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dateRange, setDateRange] = useState({
    checkin: "",
    checkout: "",
  });

  const fetchRooms = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/rooms`);
      setRooms(response.data.msg);
      setFilteredRooms(response.data.msg);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching rooms:", error);
      setError(true);
      setLoading(false);
    }
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const checkAvailability = async () => {
    if (!dateRange.checkin || !dateRange.checkout) {
      setFilteredRooms(rooms);
      return;
    }

    try {
      // Get all existing bookings
      const bookingsResponse = await axios.get(`${API_URL}/bookings`);
      const existingBookings = bookingsResponse.data.data;

      // Filter out rooms that are already booked for the selected dates
      const availableRooms = rooms.filter(room => {
        const isBooked = existingBookings.some(booking => 
          booking.roomType === room.type && 
          booking.checkin <= dateRange.checkout && 
          booking.checkout >= dateRange.checkin
        );
        return !isBooked;
      });

      setFilteredRooms(availableRooms);
    } catch (error) {
      console.error("Error checking availability:", error);
      setFilteredRooms(rooms);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <Container>
<br/>

<Row className="mb-4 align-items-end">
    <Col md={4}>
      <Form.Group>
        <Form.Label className="fw-bold">Check-in Date</Form.Label>
        <Form.Control
          type="date"
          name="checkin"
          value={dateRange.checkin}
          onChange={handleDateChange}
          className="form-control-lg"
          style={{ borderRadius: '8px', border: '1px solid #ced4da',cursor: 'pointer' }}
        />
      </Form.Group>
    </Col>
    <Col md={4}>
      <Form.Group>
        <Form.Label className="fw-bold">Check-out Date</Form.Label>
        <Form.Control
          type="date"
          name="checkout"
          value={dateRange.checkout}
          onChange={handleDateChange}
          className="form-control-lg"
          style={{ borderRadius: '8px', border: '1px solid #ced4da', cursor: 'pointer' }}
        />
      </Form.Group>
    </Col>
    <Col md={4}>
      <Button 
        onClick={checkAvailability} 
        className="btn-lg w-100"
        variant="primary"
        style={{ 
          borderRadius: '8px',
          height: '48px',
          marginTop: '2px',
          cursor: 'pointer'

        }}
      >
        Check Availability
      </Button>
    </Col>
  </Row>
      

      <div className="row">
        {loading ? (
          <h1>Loading.....</h1>
        ) : error ? (
          <h1>Error fetching rooms</h1>
        ) : filteredRooms.length === 0 ? (
          <h2>No rooms available for selected dates</h2>
        ) : (
          filteredRooms.map((room, index) => (
            <div key={index}>
              <BookNow room={room} selectedDates={dateRange} />
            </div>
          ))
        )}
      </div>
    </Container>
  );
}

export default Home;