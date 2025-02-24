import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import BASE_URL from '../config';

const TopNav = () => {
  const [show, setShow] = useState(false);
const [input , setInput] = useState({})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleInput = (e)=>{
    let{name , value} = e.target;
    setInput({
      ...input,
      [name] : value
   
    })
  }
  const submitHandler = async(e)=>{
    e.preventDefault()
    let api = `${BASE_URL}/doctor/registration`
    try {
      let res = await axios.post(api , input)
      console.log(res)
      alert("Register Successfully")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
     <Navbar bg='primary' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">AD Appointment System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing" onClick={handleShow}>Register a new doctor</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Doctor Name</Form.Label>
        <Form.Control type="text" name='name' onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" name='address' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name='city'onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Specialization</Form.Label>
        <Form.Select aria-label="Default select example" name="speciality" onChange={handleInput}>
          <option>Open this select menu</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="ENT">ENT</option>
          <option value="Neuro Surgeon">Neuro Surgeon</option>
          <option value="Dentist">Dentist</option>
          <option value="Plastic Surgeon">Plastic Surgeon</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Number</Form.Label>
        <Form.Control type="text" name='number' onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text" name='email' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' onChange={handleInput}/>
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={submitHandler}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}


export default TopNav