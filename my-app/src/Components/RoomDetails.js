// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Container, Button, Card, Carousel } from "react-bootstrap";
// import "./Home.css";
// import FooterComponent from "./Footer";
// const RoomDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { room } = location.state;

//   const handleGoBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div>
//     {/* // <Container className="room-details-container"> */}
//       <Button variant="secondary" onClick={handleGoBack} className="go-back-btn">
//         &larr; Back to Rooms
//       </Button>

//       {room.images && room.images.length > 0 ? (
//         <Carousel className="carousel-container">
//           {room.images.map((imageUrl, index) => (
//             <Carousel.Item key={index}>
//               <img
                
//                className="carousel-image"
//                 src={imageUrl}
//                 alt={`Room Image ${index}`}
//               />
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       ) : (
//         <p>No images available</p>
//       )}

//       <Card className="room-info-card">
//         <Card.Body>
//           <h2 className="room-title">{room.type || "Room Type Unavailable"}</h2>
//           <p className="room-description">{room.description || "No description available"}</p>
//           <h5 className="section-title">Amenities</h5>
//           {room.amenities ? (
//             Object.entries(room.amenities).map(([category, amenities]) => (
//               <div key={category}>
//                 <h6>{category}</h6>
//                 <ul className="amenities-list">
//                   {Object.entries(amenities)
//                     .filter(([key, value]) => value)
//                     .map(([key]) => (
//                       <li key={key}>{key}</li>
//                     ))}
//                 </ul>
//               </div>
//             ))
//           ) : (
//             <p>No amenities available</p>
//           )}
//         </Card.Body>
//       </Card>
 
//     {/* </Container> */}
//     </div>
//   );
// };

// const room=()=>
// {
//   return(
//     <div>
//     <RoomDetails/>
//     <FooterComponent/>
//     </div>
//   )
// }
// export default room;


// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Button, Carousel } from "react-bootstrap";
// import FooterComponent from "./Footer";
// import "./Home.css";

// const RoomDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { room } = location.state;

//   const handleGoBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div>
//       <Carousel className="carousel-container">
//         {room.images && room.images.length > 0 ? (
//           room.images.map((imageUrl, index) => (
//             <Carousel.Item key={index}>
//               <img
//                 className="d-block w-100 carousel-image"
//                 src={imageUrl}
//                 alt={`Room Image ${index}`}
//               />
              
//             </Carousel.Item>
//           ))
//         ) : (
//           <Carousel.Item>
//             <p>No images available</p>
//           </Carousel.Item>
//         )}
//       </Carousel>
//       <div className="room-details">
//         {/* <h2 className="section-title">{room.type || "Room Type Unavailable"}</h2> */}
//         {/* <p className="room-description text-center">{room.description || "No description available"}</p> */}
//         <h5 className="section-title  text-center">Amenities</h5>
//         {room.amenities ? (
//           <div className="amenities " >
//             {Object.entries(room.amenities).map(([category, amenities]) => (
//               <div key={category} className="amenities-category">
//                 <h4 className="fw-bold">{category}</h4>
//                 <ul className="amenities-list">
//                   {Object.entries(amenities)
//                     .filter(([key, value]) => value)
//                     .map(([key]) => (
//                       <li key={key}>{key}</li>
//                     ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No amenities available</p>
//         )}
//       </div>
//       <Button variant="secondary" onClick={handleGoBack} className="mt-3">
//         &larr; Back to Rooms
//       </Button>
//       <FooterComponent />
//     </div>
//   );
// };



// export default RoomDetails;


// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Button, Carousel } from "react-bootstrap";
// import FooterComponent from "./Footer";
// import "./Home.css";

// const RoomDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { room } = location.state;

//   const handleGoBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div>
//       <Carousel className="carousel-container">
//         {room.images && room.images.length > 0 ? (
//           room.images.map((imageUrl, index) => (
//             <Carousel.Item key={index}>
//               <img
//                 className="d-block w-100 carousel-image"
//                 src={imageUrl}
//                 alt={`Room Image ${index}`}
//               />
              
//             </Carousel.Item>
//           ))
//         ) : (
//           <Carousel.Item>
//             <p>No images available</p>
//           </Carousel.Item>
//         )}
//       </Carousel>
//       <div className="room-details">
//         {/* <h2 className="room-title text-center">{room.type || "Room Type Unavailable"}</h2>
//         <p className="room-description text-center">{room.description || "No description available"}</p> */}
//         <h3 className="section-title text-center">Amenities</h3>
//         {room.amenities ? (
//           <div className="amenities">
//             {Object.entries(room.amenities).map(([category, amenities]) => (
//               <div key={category} className="amenities-category">
//                 <h4 className="fw-bold">{category}</h4>
//                 <ul className="amenities-list">
//                   {Object.entries(amenities)
//                     .filter(([key, value]) => value)
//                     .map(([key]) => (
//                       <li key={key}>{key}</li>
//                     ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No amenities available</p>
//         )}
//       </div>
//       <Button variant="secondary" onClick={handleGoBack} className="mt-3">
//         &larr; Back to Rooms
//       </Button>
//       <FooterComponent />
//     </div>
//   );
// };

// export default RoomDetails;




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