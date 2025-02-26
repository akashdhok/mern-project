const docModel = require("../model/doctorModel")
const patientModel = require("../model/patientModel")


const getDoctorDetails = async(req , res)=>{
    const {id} = req.query;
    try {
        const Doctor = await docModel.findById(id)
        res.status(200).send(Doctor)
    } catch (error) {
        console.log(error)
    }
}

const patientDetails = async(req , res)=>{
    let{ docid,name,disease,email,address ,number} = req.body;
    try {
        let Data = await patientModel.create({
            name : name,
            disease : disease,
            email : email,
            address : address,
            number : number,
            docid : docid
        })
        res.status(200).send("appointment successfully..!!")
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    getDoctorDetails,
    patientDetails
}