import { mongo } from "mongoose";
import mongoose from mongoose;

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    diagnosedWith:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },  
    age:{
        type: Number,
        required
    },
    bloodGroup:{
        type: String,
        required: true
    },  
    gender:{
        type:String,
        enum:["M","F","O"],
        required: true
    },
    addimitedIn:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
        
    },
    
     

},{timestamps: true});


export const Patient = mongoose.model('Patient', patientSchema);