const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
    name : String,
    disease : String,
    email : String,
    address : String,
    number : String,
    docid : {
        type : mongoose.Schema.ObjectId,
        ref : "doctor"
    }
})


module.exports = mongoose.model('patient' , patientSchema)