// connecting database

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/smartcity")

const registrationSchema = new mongoose.Schema({
    firstname : {
        type:String,
        
       },

    lastname : {
        type:String,
       }  ,
    
    gender : {
        type:String,
        
    },

    phone: {
        type:Number,
        unique:true,
        
    },

    email : {
        type:String,
        unique:true,
        
    },

    birthday : {
          type:Date,
          
    } , 

    password : {
        type:String,
        
    }
       
})

const Person = new mongoose.model("Person",registrationSchema);


const adminSchema = new mongoose.Schema({

    firstname :{
         type:String,
         
    },

    lastname :{
        type:String,  
   },

   phone : {
     type:Number,
     unique:true
   },

      email:{
          type:String,
          unique:true,
          
      },

      adminkey : {
        type:String,
        
    }
})

const Admin = new mongoose.model("Admin",adminSchema);




// const otpSchema = new mongoose.Schema({
//     email:String,
//     code : String,
//     expireIn : Number
// },
// {
//     timestamps:true
// })

const otpSchema = new mongoose.Schema({
    email :{
     type:String
    } , 
  otp : {
      type:Number,
  },
  createdAt : {
    type:Date,
    expires:'20s',
    default:Date.now
    }
})

const otp = new mongoose.model("otp",otpSchema);

const wasteSchema = new mongoose.Schema({
    city : String,
    img : String ,
    query : String ,
    name : String,
    email : String,
    phone : Number,
},
{
    timestamps:true
})

const Waste = new mongoose.model("Waste",wasteSchema)

const highgrvSchema = new mongoose.Schema({
    subject : String,
    address: String,
    grievance : String,
    name : String,
    email : String,
    phone : Number
})

const HighGrievance = new mongoose.model("HighGrievance",highgrvSchema)

const highwasteSchema = new mongoose.Schema({
    city : String,
    img : String ,
    query : String ,
    name : String,
    email : String,
    phone : Number
})

const highWaste = new mongoose.model("HighWaste",highwasteSchema)

const grvSchema = new mongoose.Schema({
    subject : String,
    address: String,
    grievance : String,
    name : String,
    email : String,
    phone : Number,
},
{
    timestamps:true
})

const Grievance = new mongoose.model("Grievance",grvSchema)


const database = "connection successful with database"


module.exports = { 
   Person , Admin , otp , Waste , Grievance , database , HighGrievance , highWaste
}


