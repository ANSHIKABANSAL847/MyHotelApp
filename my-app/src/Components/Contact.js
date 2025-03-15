
import { Container, Row, Col,  Button, Form,Accordion} from "react-bootstrap";
import slide1 from "../assets/Deluxe-1.jpg";
import Footer from "./Footer"
import axios from 'axios';
const API_URL = "https://myhotelapp-2.onrender.com";
const HeroSection = () => {
  return (
    <section
      className="hero-section"
         style={{
         position: 'relative',
         background: `url(${slide1}) no-repeat center center`,// Adjust the path to the image
         backgroundSize: 'cover',
         padding: '100px 0',
       }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',  //Dark overlay for better text contrast
        }}
      ></div>

      {/* Content */}
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Row className="text-center text-white">
          <Col>
            <h1 className="display-3 fw-bold" style={{ fontSize: "3rem", fontWeight: "bold" }}>
               <span style={{ color: "#80C904" }}>CONTACT US</span>
            </h1>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

const ContactForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.formName.value,
      email: event.target.formEmail.value,
      message: event.target.formMessage.value,
    };

    try {
      const response = await axios.post(`${API_URL}/contact`, formData);
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.error || 'An error occurred. Please try again.');
    }
  };

  return (
    <Container className="my-5 d-flex justify-content-center">
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>LET'S GET IN TOUCH</h2>
        <hr
          className="mb-4"
          style={{
            width: '50px',
            margin: 'auto',
            borderTop: '3px solid #00BFFF',
          }}
        />
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col sm={6} className="mb-3 mb-sm-0">
              <Form.Group controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  style={{
                    borderRadius: '30px',
                    height: '50px',
                    fontSize: '16px',
                    borderColor: '#ddd',
                  }}
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    borderRadius: '30px',
                    height: '50px',
                    fontSize: '16px',
                    borderColor: '#ddd',
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-4" controlId="formMessage">
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Drop us a line or two..."
              style={{
                borderRadius: '15px',
                fontSize: '16px',
                borderColor: '#ddd',
                padding: '15px',
              }}
            />
          </Form.Group>
          <div className="text-center">
            <Button
              type="submit"
              className="px-4 py-2"
              style={{
                backgroundColor: '#00BFFF',
                border: 'none',
                borderRadius: '30px',
                fontSize: '16px',
                color: '#fff',
              }}
            >
              Submit Message
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};




const FAQSection = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 fw-bold">Frequently Asked Questions</h2>
      <hr className="mb-4" style={{ width: "60px", margin: "auto", borderTop: "3px solid #00BFFF" }} />
      
      <Accordion defaultActiveKey="0">
        {faqData.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index} className="mb-3">
            <Accordion.Header className="fw-semibold">{faq.question}</Accordion.Header>
            <Accordion.Body style={{ backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
              {faq.answer}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

const faqData = [
  {
    question: "How can I book a room?",
    answer: "You can book a room through our website by navigating to the 'Book Now' section and selecting your desired dates.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in time is from 2:00 PM onwards, and check-out is before 11:00 AM.",
  },
  {
    question: "Do you offer free Wi-Fi?",
    answer: "Yes, we provide complimentary high-speed Wi-Fi throughout the hotel premises.",
  },
  {
    question: "Are pets allowed in the hotel?",
    answer: "Unfortunately, we do not allow pets in our hotel rooms for hygiene and allergy concerns.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, UPI, net banking, and cash payments at the reception.",
  },
];




const Contact = () => {
  return (
    <>
     
      <HeroSection/>
      <ContactForm/>
      <FAQSection/>
      <Footer/>
    </>
  );
};

export default Contact;