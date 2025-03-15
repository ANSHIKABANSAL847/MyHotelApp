import { useState } from "react";
import { Form, Button } from "react-bootstrap";

// Add this filter component within the parent component (or within the Room component if preferred)
const RoomFilter = ({ onFilterChange }) => {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const handleFilterChange = () => {
    onFilterChange({ checkin, checkout });
  };

  return (
    <div className="d-flex justify-content-center mb-4">
      <Form className="d-flex">
        <Form.Group className="me-2">
          <Form.Label>Check-in Date</Form.Label>
          <Form.Control
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="me-2">
          <Form.Label>Check-out Date</Form.Label>
          <Form.Control
            type="date"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleFilterChange}>
          Apply Filter
        </Button>
      </Form>
    </div>
  );
};
export default RoomFilter;