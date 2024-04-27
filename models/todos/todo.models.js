import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,

    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy:{
       type: mongoose.Schema.Types.ObjectId, //indicates that we are giving reference to another schema which is user in this case
       ref:"User" //make sure reference is the same name  which we have export in the schema that we want to reference
    },
    subTodos:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ]//indicates the array of subtodo and referencing from subtodod


},{timestamps: true}
)

export const Todo = mongoose.model("Todo", todoSchema);
//export takes two arguments, the first is the name of the model and the second is the schema it is based on