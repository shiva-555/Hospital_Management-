const express = require("express")

const router = express.Router()


const CreateHospital = require("../Controller/hospital_controller")


router.post("/register",CreateHospital)


module.exports= router