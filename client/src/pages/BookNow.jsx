import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import BASE_URL from '../config';
const BookNow = () => {
    const {id} = useParams()
    const[docInfo , setDocInfo] = useState({})
    const[input , setInput] = useState({})
const loadData = async()=>{
    let api = `${BASE_URL}/patient/patientappoint/?id=${id}`;
    try {
        let res = await axios.get(api)
        console.log(res.data)
        setDocInfo(res.data)
    } catch (error) {
        
    }
}
useEffect(()=>{
    loadData()
},[])

const changeHandler = (e)=>{
let{name , value} = e.target;
setInput({
    ...input,
    [name] : value
})
}
const submitHandler = async(e)=>{
    e.preventDefault()
    let api = `${BASE_URL}/patient/patientdata`
    try {
        let res = await axios.post(api , {docid : id , ...input})
        alert(res.data)
    } catch (error) {
        console.log(error)
    }
}
  return (
    <>
    <h1 align = "center">Take Appointment : {id}</h1>
    <hr />
    <h4 align = "center">Doctor Name : {docInfo.name}</h4>
    <h4 align = "center">Doctor Speciality : {docInfo.speciality}</h4>
   
    <hr />
    <Form style={{width : "500px", margin : "auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" placeholder="Enter patient name" name='name' onChange={changeHandler} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Disease</Form.Label>
        <Form.Control type="text" placeholder="Enter patient disease" name='disease' onChange={changeHandler} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter email</Form.Label>
        <Form.Control type="text" placeholder="Enter patient email" name='email' onChange={changeHandler} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" placeholder="Enter patient address" name='address' onChange={changeHandler} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Number</Form.Label>
        <Form.Control type="text" placeholder="Enter patient number" name='number' onChange={changeHandler} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitHandler}>
        Submit
      </Button>
    </Form>
    <br /><br />
    </>
  )
}

export default BookNow