import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Carousel } from "react-bootstrap";
import FooterComponent from "./Footer";
import "./Home.css";

const RoomDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { room } = location.state;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Carousel className="carousel-container">
        {room.images && room.images.length > 0 ? (
          room.images.map((imageUrl, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 carousel-image"
                src={imageUrl}
                alt={`Room Image ${index}`}
              />
            </Carousel.Item>
          ))
        ) : (
          <Carousel.Item>
            <p>No images available</p>
          </Carousel.Item>
        )}
      </Carousel>
      <div className="room-details">
        {/* <h2 className="room-title text-center">{room.type || "Room Type Unavailable"}</h2>
        <p className="room-description text-center">{room.description || "No description available"}</p> */}
        <h3 className="section-title text-center">Amenities</h3>
        {room.amenities ? (
          <div className="amenities">
            {Object.entries(room.amenities).map(([category, amenities]) => (
              <div key={category} className="amenities-category">
                <h3 className="fw-bold">{category}</h3>
                <ul className="amenities-list">
                  {Object.entries(amenities)
                    .filter(([key, value]) => value)
                    .map(([key]) => (
                      <li key={key}>&#8226; {key}</li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p>No amenities available</p>
        )}
      </div>
      <Button variant="secondary" onClick={handleGoBack} className="mt-3">
        &larr; Back to Rooms
      </Button>
      <FooterComponent />
    </div>
  );
};

export default RoomDetails;