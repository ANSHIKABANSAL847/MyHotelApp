import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import './UserDashboard.css';

const UserDashboard = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserDetails();
    fetchUserBookings();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/signup', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUserDetails(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const fetchUserBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/bookings', {
        headers: { Authorization: `Bearer ${token}` }
      });
  
      console.log('Bookings response:', response.data); // Debugging line
      setBookings(Array.isArray(response.data.data) ? response.data.data : []); // Accessing the data array
      setLoading(false);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setLoading(false);
    }
  };
  

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="user-profile">
        <h2>User Profile</h2>
        {userDetails && (
          <div className="profile-details">
            <img src={userDetails.avatar || '/default-avatar.png'} alt="Profile" className="profile-image" />
            <div className="user-info">
              <h3>{userDetails.name}</h3>
              <p>Email: {userDetails.email}</p>
              <p>Phone: {userDetails.phone}</p>
              <p>Member since: {new Date(userDetails.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        )}
      </div>

      <div className="bookings-section">
        <h2>Your Bookings</h2>
        {bookings.length === 0 ? (
          <p>No bookings found</p>
        ) : (
          <div className="bookings-grid">
            {bookings.map((booking) => (
              <div key={booking.id} className="booking-card">
                <h3>{booking.roomType}</h3>
                <div className="booking-details">
                  <p>Check-in: {new Date(booking.checkin).toLocaleDateString()}</p>
                  <p>Check-out: {new Date(booking.checkout).toLocaleDateString()}</p>
                  <p>Guests: {booking.guests}</p>
                  <p>Total Amount: ${booking.totalAmount}</p>
                  {/* <p>Status: <span className={`status ${booking.status.toLowerCase()}`}>{booking.status}</span></p> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;