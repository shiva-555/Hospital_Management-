const mongoose = require("mongoose")

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    Mob: {type:Number,
          require:true
    },
    profileImage: {type:String, require:true}, // s3 link
    
    address: {
        Country: {type:String, require: true}
        street: {type:String,require:true},
        city: {type:String, require:true},
        pincode: {type:number},
  
     Ambulance: {type:Boolean},
     Consultation_Fee :{type:Number}
  
    },


},{timestamps:true});

module.exports= mongoose.model("Hospital",hospitalSchema)