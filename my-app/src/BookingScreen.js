import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingScreen = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [room, setRoom] = useState(null);  // Initialize as null

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        setLoading(true);
        const data = (await axios.post('http://localhost:5000/rooms', { roomid: match.params.roomid })).data;
        console.log('Fetched room data:', data); // Log the fetched data
        setRoom(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching room data:', err); // Log the error
        setError(true);
        setLoading(false);
      }
    };

    fetchRoomData();
  }, [match.params.roomid]);  // Dependency array to re-run if roomid changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching room data.</div>;
  }

  return (
    <div className="row">
      <div className="col-md-5">
        <h1>{room?.name}</h1>
        {room?.images && room.images.length > 0 ? (
          <img src={room.images[0]} className="big-img" alt={room.name} />
        ) : (
          <p>No image available</p>
        )}
      </div>
      <div className="col-md-5">
        <h1>Booking Details</h1>
        <hr />
        <p><strong>Name:</strong> User Name</p>
        <p><strong>From Date:</strong> TBD</p>
        <p><strong>To Date:</strong> TBD</p>
        <p><strong>Max Count:</strong> {room?.maxCount}</p>
        <h1>Amount</h1>
        <hr />
        <p><strong>Total Days:</strong> TBD</p>
        <p><strong>Rent Per Day:</strong> {room?.rentPerDay}</p>
        <p><strong>Total Amount:</strong> TBD</p>
        <button className="btn btn-primary">Book Now</button>
      </div>
    </div>
  );
};

export default BookingScreen;
