import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import BASE_URL from '../config';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate()
    const submitHandler = async(e)=>{
      let api = `${BASE_URL}/doctor/login`
      try {
        let res  = await axios.post(api , {email : email , password : password})
        console.log(res)
        alert("logged in")
        navigate("/dashboard")
        localStorage.setItem("email" , email)
        localStorage.setItem("name" , res.data.name)
        localStorage.setItem("docid" ,res.data._id )
      } catch (error) {
        console.log(error)
        alert(error.response.data)
      }
    }
  return (
    <Container 
      className="d-flex justify-content-center align-items-center" 
      style={{ height: '100vh', margin : "auto" }}
    >
      <Row className="w-100">
        <Col md={6} lg={4} sm={12} className="d-flex justify-content-center">
          <Card className="shadow-lg p-4 w-100">
            <Card.Body>
              <h2 className="text-center mb-4">Doctor Login</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" onClick={submitHandler}>
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
