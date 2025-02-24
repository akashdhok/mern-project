const express  = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
require("dotenv").config()
const mongoose = require("mongoose")
const Port  = process.env.PORT ||8000
const router = require("./routes/doctorRoute")
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
mongoose.connect(process.env.DB_CONNECTION).then(()=>{
console.log("DB Connected")
})
app.use("/doctor" , router)


app.listen(Port , ()=>{
    console.log(`listening at the port of ${Port}`)
})