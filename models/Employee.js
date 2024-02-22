import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
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

const Employee = mongoose.model("employees", EmployeeSchema);

export default Employee;

