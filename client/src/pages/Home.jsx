import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import BASE_URL from '../config';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [apiData, setApiData] = useState([]);
 const navigate = useNavigate()

  const loadData = async () => {
    let api = `${BASE_URL}/doctor/displayhome`;
    try {
      let res = await axios.get(api);
      setApiData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);


  const appointment = (id)=>{
    navigate(`/booknow/${id}`)
  }
  return (
    <>
    <Carousel fade>
    <Carousel.Item>
      <img src="./one.jpeg" alt="" width="100%" height="300px" />
    </Carousel.Item>
    <Carousel.Item>
    <img src="./four.webp" alt="" width="100%" height="300px" />
    </Carousel.Item>
    <Carousel.Item>
    <img src="./three.jpg" alt="" width="100%" height="300px" />
    </Carousel.Item>
  </Carousel>


    <Container className="mt-4">
      <h1 className="text-center mb-4">Our Doctors</h1>
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
                  <Button variant="primary" className="w-100" onClick={()=>{appointment(e._id)}}>Take Appointment</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    </Container>
    </>
  );
};

export default Home;
