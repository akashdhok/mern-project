const docModel = require("../model/doctorModel")



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
module.exports = {
    registration,
    homeDisplay
}