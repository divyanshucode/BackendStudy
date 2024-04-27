import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

         password:{ 
                type: String,
                required: true
            },
        } ,{timestamps: true}
        //timestamps: true will automatically add the createdAt and updatedAt fields to the schema
        //its is passed as second argument to the schema constructor function
)

export const User = mongoose.model("User", userSchema);