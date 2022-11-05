const mongoose = require("mongoose")

const docterSchema = new mongoose.Schema({
    fname:
        type:String,
        require:true,
        },
    
    lname: {
        type: String,
        require:true
    }
    
    age: {
        type: Number
    },
    
    Education :{
        type: String
    },
    
    email:{
        type: String,
        require: true
    },
    
    Mobile :{
        type: Number,
        require: true
    
    },{timestamps:true})


    module.exports= mongoose.model("doctor",doctorSchema)
    


