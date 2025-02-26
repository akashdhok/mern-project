const express = require("express")
const route = express.Router()
const controller = require("../controller/docController")


route.post("/registration" , controller.registration)
route.get("/displayhome" , controller.homeDisplay)
route.post("/login" , controller.loginData)
route.post("/searchdoctor", controller.doctorSearch);
route.get("/patientlist" , controller.patientList)
module.exports = route