import mongoose from "mongoose";

//minimodel
const orderItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product",
        
    },
    quantity:{
        type: Number,
        required:true,  
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required:true,
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        
    },
    orderItems:{
        type:[orderItemSchema]
    },//minimodel is used here
    address:{
        type: String,   
        required:true,
    },
    status:{
        type: String,
        //enum is used to define the possible values
        //also restrict spelling
        enum:["pending","delievered","cancelled"],
        default:"pending"
        
    }

    }
,{timestamps:  true})

export const Order = mongoose.model("Order", orderSchema)