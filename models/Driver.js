import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DriverSchema = new Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    contact:{
        type: String,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    branch:{
        type: String,
        required: true,
    },
    role: {
        type: Number,
        required: true,
    },
},{
    timestamps: true,
})

const Driver = mongoose.model("drivers", DriverSchema);

export default Driver;

