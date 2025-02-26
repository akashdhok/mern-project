import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import BASE_URL from './config';
import Table from 'react-bootstrap/Table';
const Dash = () => {
    let nav = useNavigate()
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")
    const[apiData , setApiData] = useState([])
    useEffect(()=>{
      if(!localStorage.getItem("name"))
      {
        nav("/")
      }
    } , [])
    const logout =()=>{
      nav("/")
      localStorage.clear()
      alert("Logout Successfully")
    }
    const checkAppointment = async()=>{
      let api=`${BASE_URL}/doctor/patientlist/?docid=${localStorage.getItem("docid")}`;
    try {
      const res = await axios.get(api)
      console.log(res)
      setApiData(res.data)

    } catch (error) {
      console.log(error)
    }
    }
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Doctor Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link  onClick={logout}>Logout</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <h1>Welcome : {name}</h1>
      <h3>Email : {email}</h3>
      <button onClick={checkAppointment}>my Appointment</button>
      <br /><hr /><br />


      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Patient Name</th>
          <th>Diesase</th>
          <th>Address</th>
          <th>Email</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>
        {
          apiData.map((e , index)=>{
            return <tr key={index}>
              <td>{index+1}</td>
              <td>{e.name}</td>
              <td>{e.disease}</td>
              <td>{e.address}</td>
              <td>{e.email}</td>
              <td>{e.number}</td>
            </tr>
          })
        }
        </tbody>
        </Table>

    </>
  )
}

export default Dash