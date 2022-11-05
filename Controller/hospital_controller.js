const Hospital_Model = require("../Models/Hospital_Model")

const mongoose = require("mongoose")


const CreateHospital = async(req,res)=>{
     try{
        let details = req.body

        let hospitalDetails = await Hospital_Model.create(details)
        return res.status(201).send({status:true, details:hospitalDetails})
     }

     catch(err){
        return res.status(500).send({err.message, status:false})
     }

     
}

module.exports.CreateHospital=CreateHospital