const mongoose = require("mongoose")
const docSchema = new mongoose.Schema({
    name : String,
    address : String,
    city : String,
    speciality : String,
    number :String,
    email : String,
    password : String
})


module.exports = mongoose.model("doctor" , docSchema)