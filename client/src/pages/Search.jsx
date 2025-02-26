import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../config';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchDoctor = () => {
    const [input, setInput] = useState({});
    const [mydata, setMydata] = useState([]);
    
    const handleInput = (e) => {
        let { name, value } = e.target;
        setInput(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async () => {
        let api = `${BASE_URL}/doctor/searchdoctor`;
        try {
            const response = await axios.post(api, input);
            setMydata(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    return (
        <Container>
            <Row className="justify-content-md-center mt-4">
                <Col md={6}>
                    <Card className="shadow p-4">
                        <Card.Title className="text-center mb-3">Search Doctor</Card.Title>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Enter Doctor Name</Form.Label>
                                <Form.Control type="text" name="name" onChange={handleInput} placeholder="Doctor Name" />
                            </Form.Group>
                            
                            <Form.Group className="mb-3">
                                <Form.Label>Select Specialization</Form.Label>
                                <Form.Select name="speciality" onChange={handleInput}>
                                    <option value="">Select Specialization</option>
                                    <option value="Cardiologist">Cardiologist</option>
                                    <option value="ENT">ENT</option>
                                    <option value="Neuro Surgeon">Neuro Surgeon</option>
                                    <option value="Dentist">Dentist</option>
                                    <option value="Plastic Surgeon">Plastic Surgeon</option>
                                </Form.Select>
                            </Form.Group>
                            
                            <Button variant="primary" className="w-100" onClick={handleSubmit}>Search</Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
            
            {mydata.length > 0 && (
                <Row className="mt-4">
                    <Col>
                        <Table striped bordered hover responsive className="shadow">
                            <thead className="bg-primary text-white text-center">
                                <tr>
                                    <th>Doctor Name</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Specialization</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mydata.map((doctor, index) => (
                                    <tr key={index}>
                                        <td>{doctor.name}</td>
                                        <td>{doctor.address}</td>
                                        <td>{doctor.city}</td>
                                        <td>{doctor.email}</td>
                                        <td>{doctor.number}</td>
                                        <td>{doctor.speciality}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default SearchDoctor;