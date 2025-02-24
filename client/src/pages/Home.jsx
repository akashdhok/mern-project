import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card, Spinner } from 'react-bootstrap';
import BASE_URL from '../config';

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    let api = `${BASE_URL}/doctor/displayhome`;
    try {
      let res = await axios.get(api);
      setApiData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Our Doctors</h1>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading doctors...</p>
        </div>
      ) : apiData.length === 0 ? (
        <p className="text-center text-danger">No doctors available.</p>
      ) : (
        <Row className="justify-content-center">
          {apiData.map((e, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="shadow-lg border-0 rounded-3 h-100">
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{e.name}</Card.Title>
                  <Card.Text>
                    <ul className="list-unstyled">
                      <li><strong>Address:</strong> {e.address}</li>
                      <li><strong>City:</strong> {e.city}</li>
                      <li><strong>Email:</strong> {e.email}</li>
                      <li><strong>Phone:</strong> {e.number}</li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary" className="w-100">Take Appointment</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Home;
