import mongoose from mongoose;

const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    expiernecInYears:{
        type: Number,
        default: 0
    },
    worksInHosputals:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        }
    ],
    specialization:{
        type: String,
        required: true
    }

},{timestamps: true});


export const Doctor = mongoose.model('Doctor', doctorSchema);