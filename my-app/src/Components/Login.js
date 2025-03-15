

import React, { useState ,useEffect} from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import CarFooter from './Footer';
import { useNavigate } from 'react-router-dom';





const API_URL = "https://myhotelapp-2.onrender.com"

const Carbooking = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

 

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin && window.location.pathname === '/admin') {
      navigate('/');
    }
  }, [navigate]);

  const toggleForm = () => setIsLogin(!isLogin);

  function calllogin() {
    // Check for predefined admin login
    if (validate()) {
      return;
    }
  
    const newrecord = { email, password };
    const data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newrecord),
    };
  
    fetch(`${API_URL}/login`, data)
      .then((res) => res.json())
      .then((result) => {
        console.log("Login result:", result);
  
        if (result.status === 200 && result.msg === "Record exists") {
          alert('Login successful');
          navigate("/"); // Redirect only if login is successful
        } else if (result.status === 401) {
          alert('Invalid email or password'); // Display error message
        } else {
          alert(result.msg || 'Something went wrong. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        alert('Something went wrong. Please try again.');
      });
  }
  
  // Function to validate predefined admin credentials
  function validate() {
    if (email === "anshika@gmail.com" && password === "abcdef") {
      alert("Admin logged in successfully");
      localStorage.setItem('isAdmin', true);
      navigate("/admin");
      return true; // Stop further execution
    }
    return false; // Continue with regular login
  }
  
  
  
  function callsignup() {
    const newrecord = { name, email, password };
    const data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newrecord),
    };
    fetch(`${API_URL}/signup`, data)
      .then((res) => res.json())
      .then((result) => {
        console.log("result is", result);
        alert('signup successfully');
      });
  }

  function getdata(e) {
    e.preventDefault(); // Prevent form submission from refreshing the page
    if (isLogin) {
       calllogin();
      //validate();
    } else {
      callsignup();
      console.log("signup");
    }
  }

  return (
    <div>
    <Container fluid style={containerStyle}>
      <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Col md={6} lg={4}>
          <Card style={cardStyle}>
            <Card.Body>
              <h2 style={headerStyle}>{isLogin ? 'Login' : 'Sign Up'}</h2>
              <p style={subHeaderStyle}>
                {isLogin ? 'Welcome back! Please login to book a service.' : 'Create an account to book your service.'}
              </p>
              <Form onSubmit={getdata}>
                {!isLogin && (
                  <Form.Group controlId="signupName" className="mb-3">
                    <Form.Label style={labelStyle}>Name</Form.Label>
                    <div style={inputContainerStyle}>
                      <FaUser style={iconStyle} />
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        style={inputStyle}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </Form.Group>
                )}
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label style={labelStyle}>Email</Form.Label>
                  <div style={inputContainerStyle}>
                    <FaEnvelope style={iconStyle} />
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      style={inputStyle}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="mb-4">
                  <Form.Label style={labelStyle}>Password</Form.Label>
                  <div style={inputContainerStyle}>
                    <FaLock style={iconStyle} />
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      style={inputStyle}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </Form.Group>
                <Button variant="primary" type="submit" style={buttonStyle} block>
                  {isLogin ? 'Login' : 'Sign Up'}
                </Button>
              </Form>
              <p style={toggleTextStyle}>
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <span onClick={toggleForm} style={toggleLinkStyle}>
                  {isLogin ? 'Sign Up' : 'Login'}
                </span>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <CarFooter />
  </div>
  );
};

export default Carbooking;

// Inline styles
const containerStyle = {
  background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
  padding: '2rem 0',
};

const cardStyle = {
  border: 'none',
  borderRadius: '12px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  padding: '2.5rem',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  textAlign: 'center',
};

const headerStyle = {
  fontSize: '2rem',
  fontWeight: '700',
  color: '#007bff',
  marginBottom: '0.5rem',
  letterSpacing: '1px',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
};

const subHeaderStyle = {
  fontSize: '1rem',
  color: '#666',
  fontStyle: 'italic',
  marginBottom: '2rem',
};

const inputContainerStyle = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
};

const iconStyle = {
  position: 'absolute',
  left: '12px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#007bff',
  fontSize: '1.2rem',
};

const inputStyle = {
  paddingLeft: '2.5rem',
  borderRadius: '50px',
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
  border: '1px solid #ddd',
  transition: 'border-color 0.3s ease',
};

const labelStyle = {
  fontWeight: '600',
  color: '#444',
  fontSize: '1rem',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  borderColor: '#007bff',
  borderRadius: '30px',
  fontWeight: '600',
  fontSize: '1.1rem',
  padding: '0.5rem 1.5rem',
  transition: 'transform 0.2s ease, background-color 0.3s ease',
  boxShadow: '0 4px 10px rgba(0, 123, 255, 0.3)',
  letterSpacing: '1px',
};

const toggleTextStyle = {
  fontSize: '0.9rem',
  color: '#666',
  marginTop: '1.5rem',
};

const toggleLinkStyle = {
  color: '#007bff',
  cursor: 'pointer',
  fontWeight: '600',
  textDecoration: 'underline',
};