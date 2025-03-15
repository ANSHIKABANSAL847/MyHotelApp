
import { useState, useEffect } from "react";
import { Button, Table, Form, Container, Row, Col, Card } from "react-bootstrap";
const API_URL = "https://myhotelapp-2.onrender.com"
function Apipractice() {
    const [student, setStudent] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        console.log("Fetching data...");
        getData();
    }, []);

    function getData() {
        fetch(`${API_URL}/signup`)
            .then((res) => res.json())
            .then((response) => {
                if (response.status === 200 && Array.isArray(response.msg)) {
                    console.log("Data received:", response.msg);
                    setStudent(response.msg);
                } else {
                    console.log("No data or unexpected response");
                    setStudent([]);
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setStudent([]);
            });
    }

    function apiPost() {
        const values = { name, email, password };
        fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        })
            .then((res) => res.json())
            .then((resp) => {
                if (resp.status === 201) {
                    console.log("User added successfully");
                    getData();
                    clearForm();
                } else {
                    alert("Something went wrong");
                }
            })
            .catch((error) => console.error("Error adding user:", error));
    }

    function deleteData(item) {
        fetch(`${API_URL}/signup?name=${item.name}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((res) => res.json())
            .then((resp) => {
                if (resp.status === 200) {
                    console.log("User deleted successfully");
                    getData();
                } else {
                    alert("Something went wrong");
                }
            })
            .catch((error) => console.error("Error deleting user:", error));
    }

    function clearForm() {
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <Container>
            <Card className="my-4 p-4 shadow-lg rounded-4 border-0">
                <Card.Body>
                    <h1 className="text-center mb-4 fw-bold text-primary">Manage User</h1>
                    <Row className="justify-content-center mb-4">
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="shadow-sm p-3 rounded-3"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="shadow-sm p-3 rounded-3"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="shadow-sm p-3 rounded-3"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="justify-content-center mb-3">
                        <Col md={4} className="text-center">
                            <Button variant="success" onClick={apiPost} className="px-5 py-2 fw-bold rounded-pill">
                                Save New User
                            </Button>
                        </Col>
                    </Row>

                    <Table striped bordered hover responsive className="shadow-sm text-center">
                        <thead className="bg-light">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.length > 0 ? (
                                student.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.password}</td>
                                        <td>
                                            <Button variant="outline-danger" onClick={() => deleteData(item)} className="px-3 py-1">
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center p-4">No students found</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Apipractice;

