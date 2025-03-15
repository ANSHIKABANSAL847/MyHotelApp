import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import './ManageRoom.css';
const roomTypes = ["Semi-Deluxe", "Deluxe", "Super Deluxe", "Executive"];
const API_URL = "https://myhotelapp-2.onrender.com";
const ManageRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [currentRoom, setCurrentRoom] = useState({
    type: "",
    size: "",
    pricewithbreakfast: "",
    pricewithoutbreakfast: "",
    bedType: "",
    images: [],
    amenities: {
      general: {
        heater: false,
        airConditioning: false,
        iron: false,
        wifi: false,
        housekeeping: false,
        laundry: false,
        roomService: false,
      },
      roomFeatures: {
        telephone: false,
        pillowMenu: false,
        hypoallergenicBedding: false,
        sofa: false,
        closet: false,
        livingArea: false,
        minibar: false,
        seatingArea: false,
        fireplace: false,
        chair: false,
        diningArea: false,
        readingLamp: false,
        blackoutCurtains: false,
      },
      foodAndDrinks: {
        snackBasket: false,
      },
      safetyAndSecurity: {
        safe: false,
      },
      mediaAndEntertainment: {
        channelMusic: false,
        tv: false,
      },
      kitchenAndAppliances: {
        refrigerator: false,
        kettle: false,
      },
      bathroom: {
        dentalKit: false,
        towels: false,
        shower: false,
        geyser: false,
        showerCap: false,
        slippers: false,
        bathrobes: false,
        sanitaryBin: false,
        weighingScale: false,
        toiletries: false,
        westernToilet: false,
        hotColdWater: false,
      },
      otherFacilities: {
        soundProofing: false,
        shoeShine: false,
        balcony: false,
        newspaper: false,
        privatePool: false,
      },
    },
  });

  useEffect(() => {
    fetchRooms();
  }, []);

  // Fetch all rooms
  const fetchRooms = async () => {
    try {
      const response = await axios.get(`${API_URL}/rooms`);
      if (response.data && Array.isArray(response.data.msg)) {
        setRooms(response.data.msg);
      } else {
        setRooms([]);
      }
    } catch (error) {
      console.error("Error fetching rooms:", error);
      setRooms([]);
    }
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  // Upload images and store URLs in currentRoom.images
  const handleUpload = async (e) => {
    e.preventDefault();
    if (files.length === 0 || files.length > 3) {
      alert("Please select between 1 and 3 images");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("profileimages", file);
    });

    try {
      const response = await axios.post(`${API_URL}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Server response:", response.data); // Log the server response

      const uploadedImageUrls = response.data.fileUrls; // ✅ Make sure the correct property is used

      if (!uploadedImageUrls || uploadedImageUrls.length === 0) {
        throw new Error("No file URLs returned from server");
      }

      setCurrentRoom((prev) => {
        console.log("Updating state with images:", uploadedImageUrls);
        return { ...prev, images: [...prev.images, ...uploadedImageUrls] }; // Append the uploaded images
      });

      alert("Images uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
      if (error.response) {
        console.error("Server response:", error.response.data);
        alert(`Image upload failed: ${error.response.data.message || error.message}`);
      } else {
        alert("Image upload failed!");
      }
    }
  };

  const handleSave = async () => {
    console.log("Current Room Data Before Saving:", currentRoom);

    if (!currentRoom.type || !currentRoom.size || !currentRoom.pricewithbreakfast || !currentRoom.pricewithoutbreakfast || !currentRoom.bedType || currentRoom.images.length === 0) {
      alert("Please fill all fields and upload at least one image before saving.");
      return;
    }

    try {
      await axios.post(`${API_URL}/rooms`, currentRoom);
      fetchRooms();
      setShowModal(false);
    } catch (error) {
      console.error("Error saving room:", error);
    }
  };

  const handleRoomTypeChange = (type) => {
    setCurrentRoom((prev) => {
      const existingRoom = rooms.find((room) => room.type === type);
      return {
        ...prev,
        type,
        size: existingRoom ? existingRoom.size : "",
        pricewithbreakfast: existingRoom ? existingRoom.pricewithbreakfast : "",
        pricewithoutbreakfast: existingRoom ? existingRoom.pricewithoutbreakfast : "",
        bedType: existingRoom ? existingRoom.bedType : "",
        images: [], // Clear images when selecting a room type
        amenities: existingRoom ? existingRoom.amenities : prev.amenities,
      };
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/rooms`, { data: { id } });
      setRooms((prevRooms) => prevRooms.filter((room) => room._id !== id));
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  };

  return (
    <div className="container-fluid mt-4 pt-5 px-2 px-sm-3 px-md-4">

      <h2>Manage Rooms</h2>
      <Button onClick={() => {
        setCurrentRoom({
          type: "",
          size: "",
          pricewithbreakfast: "",
          pricewithoutbreakfast: "",
          bedType: "",
          images: [],
          amenities: {
            general: {
              heater: false,
              airConditioning: false,
              iron: false,
              wifi: false,
              housekeeping: false,
              laundry: false,
              roomService: false,
            },
            roomFeatures: {
              telephone: false,
              pillowMenu: false,
              hypoallergenicBedding: false,
              sofa: false,
              closet: false,
              livingArea: false,
              minibar: false,
              seatingArea: false,
              fireplace: false,
              chair: false,
              diningArea: false,
              readingLamp: false,
              blackoutCurtains: false,
            },
            foodAndDrinks: {
              snackBasket: false,
            },
            safetyAndSecurity: {
              safe: false,
            },
            mediaAndEntertainment: {
              channelMusic: false,
              tv: false,
            },
            kitchenAndAppliances: {
              refrigerator: false,
              kettle: false,
            },
            bathroom: {
              dentalKit: false,
              towels: false,
              shower: false,
              geyser: false,
              showerCap: false,
              slippers: false,
              bathrobes: false,
              sanitaryBin: false,
              weighingScale: false,
              toiletries: false,
              westernToilet: false,
              hotColdWater: false,
            },
            otherFacilities: {
              soundProofing: false,
              shoeShine: false,
              balcony: false,
              newspaper: false,
              privatePool: false,
            },
          },
        });
        setFiles([]); // Clear the files state
        setShowModal(true);
      }}>Add Room</Button>


<div className="table-responsive">
  

      <Table striped bordered hover className="mt-3">
        <thead className="thead-dark">
          <tr>
            <th>Room Type</th>
            <th>Size</th>
            <th>Price with Breakfast</th>
            <th>Price without Breakfast</th>
            <th>Bed Type</th>
            <th>Images</th>
            <th>Amenities</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index}>
              <td>{room.type}</td>
              <td>{room.size}</td>
              <td>{room.pricewithbreakfast}</td>
              <td>{room.pricewithoutbreakfast}</td>
              <td>{room.bedType}</td>
              <td>
  <div className="d-flex flex-nowrap overflow-auto" style={{ 
    maxWidth: "200px",  // Set a fixed width for the container
    padding: "8px",
    gap: "8px"
  }}>
    {room.images && room.images.length > 0 ? (
      room.images.map((image, idx) => (
        <img 
          key={idx} 
          src={image} 
          alt={`Room ${idx}`} 
          className="img-thumbnail flex-shrink-0"
          style={{ 
            width: "80px", 
            height: "80px", 
            objectFit: "cover"
          }} 
        />
      ))
    ) : (
      <p className="text-danger m-0">No image uploaded</p>
    )}
  </div>
</td>

              <td>
                {(room.amenities &&
                  Object.keys(room.amenities)
                    .map((category) =>
                      Object.keys(room.amenities[category])
                        .filter((key) => room.amenities[category][key])
                        .map((key) => key.replace(/([A-Z])/g, " $1").trim())
                    )
                    .flat()
                    .join(", ")) || "N/A"}
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(room._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" className="modal-responsive">
        <Modal.Header closeButton>
          <Modal.Title>Add/Edit Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="p-2">
          <Row  className="g-2">
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Room Type</Form.Label>
              <Form.Control as="select" onChange={(e) => handleRoomTypeChange(e.target.value)}>
                <option value="">Select Room Type</option>
                {roomTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            </Col>
            <Col xs={12} md={6}>
           
            <Form.Group className="mb-3">
              <Form.Label>Size</Form.Label>
              <Form.Control type="text" value={currentRoom.size} onChange={(e) => setCurrentRoom({ ...currentRoom, size: e.target.value })} />
            </Form.Group>
            </Col>
           </ Row>

            <Form.Group>
              <Form.Label>Price with Breakfast</Form.Label>
              <Form.Control type="text" value={currentRoom.pricewithbreakfast} onChange={(e) => setCurrentRoom({ ...currentRoom, pricewithbreakfast: e.target.value })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price without Breakfast</Form.Label>
              <Form.Control type="text" value={currentRoom.pricewithoutbreakfast} onChange={(e) => setCurrentRoom({ ...currentRoom, pricewithoutbreakfast: e.target.value })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Bed Type</Form.Label>
              <Form.Control type="text" value={currentRoom.bedType} onChange={(e) => setCurrentRoom({ ...currentRoom, bedType: e.target.value })} />
            </Form.Group>

            {/* Image Upload Section */}
            <Form.Group>
              <Form.Label>Upload Images</Form.Label>
              <Form.Control type="file" multiple onChange={handleFileChange} />
              <Button variant="primary" className="mt-2" onClick={handleUpload}>
                Upload
              </Button>
              {currentRoom.images && currentRoom.images.length > 0 && (
                <div className="mt-2" style={{ maxHeight: "200px", overflowY: "auto" }}>
                  {currentRoom.images.map((image, index) => (
                    <img key={index} src={image} alt={`Uploaded ${index}`} style={{ width: "100%", marginTop: "10px" }} />
                  ))}
                </div>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Amenities</Form.Label>
              <Row  className="g-3"> 
                {Object.keys(currentRoom.amenities).map((category) => (
                  <Col  xs={12} sm={6} md={4} key={category} >
                    <div className="mb-2">
                      <strong>{category.replace(/([A-Z])/g, " $1").trim()}</strong>
                      {Object.keys(currentRoom.amenities[category]).map((amenity) => (
                        <Form.Check
                          key={amenity}
                          type="checkbox"
                          label={amenity.replace(/([A-Z])/g, " $1").trim()}
                          checked={currentRoom.amenities[category][amenity]}
                          onChange={(e) =>
                            setCurrentRoom((prev) => ({
                              ...prev,
                              amenities: {
                                ...prev.amenities,
                                [category]: {
                                  ...prev.amenities[category],
                                  [amenity]: e.target.checked,
                                },
                              },
                            }))
                          }
                        />
                      ))}
                    </div>
                  </Col>
                ))}
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageRooms;