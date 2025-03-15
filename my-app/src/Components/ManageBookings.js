import React, { useEffect, useState } from "react";
import { Table, Container, Spinner, Card,Button } from "react-bootstrap";
import axios from "axios";
const API_URL = "https://myhotelapp-2.onrender.com"
const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/bookings`);
      setBookings(response.data.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      alert("Failed to fetch bookings.");
    }
    setLoading(false);
  };



  const deleteBooking = async (id) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      try {
        await axios.delete(`${API_URL}/bookings/${id}`);
        alert("Booking deleted successfully.");
        fetchBookings();
      } catch (error) {
        console.error("Error deleting booking:", error);
        alert("Failed to delete booking.");
      }
    }
  };
  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card
        style={{
          width: "90%",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          backgroundColor: "#e3f2fd",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            color: "#0056b3",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Manage Bookings
        </h2>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Table
            striped
            bordered
            hover
            responsive
            className="text-center"
            style={{ borderRadius: "10px", overflow: "hidden" }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: "#0056b3",
                  color: "white",
                  fontSize: "1.1rem",
                }}
              >
                <th>S.No</th>
                <th>Room Type</th>
                <th>Category</th>
                <th>Price (₹)</th>
                <th>Guests</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center"
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#555",
                    }}
                  >
                    No bookings found
                  </td>
                </tr>
              ) : (
                bookings.map((booking, index) => (
                  <tr
                    key={index}
                    style={{
                      transition: "0.3s",
                      cursor: "pointer",
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#bbdefb")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "")
                    }
                  >
                    <td>{index + 1}</td>
                    <td>{booking.roomType}</td>
                    <td>{booking.priceOption}</td>
                    <td>₹{booking.price}</td>
                    <td>{booking.guests}</td>
                    <td>{new Date(booking.checkin).toLocaleDateString()}</td>
                    <td>{new Date(booking.checkout).toLocaleDateString()}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteBooking(booking._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        )}
      </Card>
    </Container>
  );
};

export default ManageBookings;
