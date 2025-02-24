const express = require("express")
const route = express.Router()
const controller = require("../controller/docController")


route.post("/registration" , controller.registration)
route.get("/displayhome" , controller.homeDisplay)

module.exports = route