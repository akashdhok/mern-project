const docModel = require("../model/doctorModel")
const patientModel = require("../model/patientModel")


const registration = async(req , res)=>{
    let {name , address , city , speciality , password , email , number} = req.body;
    try {
        let Data = docModel.create({
            name : name,
            address : address,
            city : city,
            speciality : speciality,
            number :number,
            email : email,
            password : password
        })
        res.status(200).send(" Registered Successfully")

    } catch (error) {
        res.status(400).send("Not registered Successfully")
    }
}
const homeDisplay = async(req , res)=>{
    try {
        let data = await docModel.find()
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
}
const loginData = async(req , res)=>{
    let{email , password} = req.body
    let doctor = await docModel.findOne({email : email})
    try {
        if(!doctor)
        {
            res.status(400).send("invalid email")
        }
        if(doctor.password != password)
        {
            res.status(400).send("invalid password")

        }
        res.status(200).send(doctor)
    } catch (error) {
       console.log(error) 
    }
}
const doctorSearch=async(req, res)=>{
    const { name, speciality}=req.body;
     
    const Doctor = await docModel.find({$and:[{"name":name}, {"speciality":speciality}]})
   
    res.status(200).send(Doctor);
  }
  const patientList = async(req , res)=>{
    let {docid} = req.query;
    const Patient = await patientModel.find({docid : docid})
    res.status(200).send(Patient)
  }
module.exports = {
    registration,
    homeDisplay,
    loginData,
    doctorSearch,
    patientList
}