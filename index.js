const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const routes = require("./Routes/route.js")

const app = express()

dotenv.config()



mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology:true, useNewUrlParser: true},
    () => console.log("connected with mongodb")
);


app.listen(8080,()=>{
    console.log("Server running on port 8080")
})

