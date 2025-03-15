import { Container, Row, Col } from "react-bootstrap";
import slide1 from "../assets/Deluxe-1.jpg";
import slide2 from "../assets/semi-delux.jpg";
import slide3 from "../assets/executive.jpg";
import slide4 from "../assets/Super-Deluxe.jpg";

const RoomsSection = () => {
  return (
    <section style={{ backgroundColor: "#e0e0e0", padding: "40px 0" }}>
      <Container>
        {/* Section 1: Image on Left, Text on Right */}
        <Row className="align-items-center mb-5">
          <Col xs={12} md={6} className="order-md-1">
            <img
              src={slide1}
              alt="Deluxe Room"
              className="img-fluid rounded shadow"
              style={{ width: "100%" }}
            />
          </Col>
          <Col xs={12} md={6} className="order-md-2">
            <div className="p-4 shadow rounded bg-white">
              <div className="text-center">
                <i className="bi bi-droplet text-primary" style={{ fontSize: "2rem" }}></i>
                <h3 className="fw-bold mt-2">Deluxe Room</h3>
                <hr className="mx-auto" style={{ width: "50px", border: "2px solid #007bff" }} />
              </div>
              <p>
                Indulge in luxury and relaxation in our Deluxe rooms, featuring 30 square meters of
                elegantly appointed space. Pamper yourself with a rejuvenating rain shower or
                indulge in a soothing bath in our beautifully designed bathrooms. Stay connected
                with high-speed internet access and Wi-Fi, and enjoy a variety of premium amenities
                for a memorable stay.
                <br />
                <strong>Amenities include:</strong> LED TV, luggage rack, in-room safe,
                complimentary water bottles, hair dryer, minibar, iron and ironing board, and a
                tea/coffee maker.
              </p>
            </div>
          </Col>
        </Row>

        {/* Section 2: Text on Left, Image on Right */}
        <Row className="align-items-center mb-5">
          <Col xs={12} md={6} className="order-md-2">
            <img
              src={slide2}
              alt="Semi-Deluxe Room"
              className="img-fluid rounded shadow"
              style={{ width: "100%" }}
            />
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <div className="p-4 shadow rounded bg-white">
              <div className="text-center">
                <i className="bi bi-star text-primary" style={{ fontSize: "2rem" }}></i>
                <h3 className="fw-bold mt-2">Semi-Deluxe Room</h3>
                <hr className="mx-auto" style={{ width: "50px", border: "2px solid #007bff" }} />
              </div>
              <p>
                Experience comfort and style in our Semi Deluxe rooms, offering 24 square meters of
                thoughtfully designed space. Unwind after a day of exploration in the city with your
                choice of a refreshing rain shower or a leisurely soak in the bathtub in our modern
                bathrooms. Stay connected with complimentary high-speed internet access and Wi-Fi,
                and enjoy a selection of in-room conveniences for a pleasant stay.
                <br />
                <strong>Amenities include:</strong> LED TV, luggage rack, in-room safe,
                complimentary water bottles, hair dryer, minibar, and a tea/coffee maker.
              </p>
            </div>
          </Col>
        </Row>

        {/* Section 3: Image on Left, Text on Right */}
        <Row className="align-items-center mb-5">
          <Col xs={12} md={6} className="order-md-1">
            <img
              src={slide3}
              alt="Executive Room"
              className="img-fluid rounded shadow"
              style={{ width: "100%" }}
            />
          </Col>
          <Col xs={12} md={6} className="order-md-2">
            <div className="p-4 shadow rounded bg-white">
              <div className="text-center">
                <i className="bi bi-droplet text-primary" style={{ fontSize: "2rem" }}></i>
                <h3 className="fw-bold mt-2">Executive Room</h3>
                <hr className="mx-auto" style={{ width: "50px", border: "2px solid #007bff" }} />
              </div>
              <p>
                Experience the pinnacle of luxury in our Executive Level rooms, featuring 40 square
                meters of refined elegance. Relax and unwind with a choice of a rejuvenating rain
                shower or a sumptuous bath in our opulent bathrooms. Stay seamlessly connected with
                high-speed internet access and Wi-Fi, and enjoy exclusive access to additional
                amenities for a truly exceptional stay.
                <br />
                <strong>Amenities include:</strong> LED TV, luggage rack, in-room safe,
                complimentary water bottles, hair dryer, minibar, iron and ironing board, Nespresso
                machine, premium bath amenities, plush bathrobe and slippers, and a work desk with
                ergonomic chair.
              </p>
            </div>
          </Col>
        </Row>

        {/* Section 4: Text on Left, Image on Right */}
        <Row className="align-items-center mb-5">
          <Col xs={12} md={6} className="order-md-2">
            <img
              src={slide4}
              alt="Super-Deluxe Room"
              className="img-fluid rounded shadow"
              style={{ width: "100%" }}
            />
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <div className="p-4 shadow rounded bg-white">
              <div className="text-center">
                <i className="bi bi-star text-primary" style={{ fontSize: "2rem" }}></i>
                <h3 className="fw-bold mt-2">Super-Deluxe Room</h3>
                <hr className="mx-auto" style={{ width: "50px", border: "2px solid #007bff" }} />
              </div>
              <p>
                Elevate your stay with our Super Deluxe rooms, offering 35 square meters of
                sophisticated comfort. Rejuvenate your senses with a revitalizing rain shower or a
                luxurious soak in the bathtub in our stylish bathrooms. Stay connected with
                complimentary high-speed internet access and Wi-Fi, and enjoy an array of premium
                amenities for an enhanced experience.
                <br />
                <strong>Amenities include:</strong> LED TV, luggage rack, in-room safe,
                complimentary water bottles, hair dryer, minibar, iron and ironing board, tea/coffee
                maker, and a plush bathrobe and slippers.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RoomsSection;

