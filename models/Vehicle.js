import mongoose from "mongoose";

const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    brand:{
        type: String,
        required: true
    },
    plate:{
        type: String,
        required: true,
        unique: true,
    },
    seats:{
        type: Number,
        required: true,
    },
    status:{
        type: String,
        required: true,
    },
    driver: {
        type: String,
    },
    // driver: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'drivers',
    // },
    destination:{
        type: String,
    },
    time: {
        type: Date,
    },
    passengers:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "employees",
        },
    ],
},{
    timestamps: true,
})

const Vehicle = mongoose.model("vehicles", VehicleSchema);

export default Vehicle;

