import mongoose, { Schema } from "mongoose";

const BikeSchema = new Schema ({
    bikeName : String,
    brandName : String,
    year : Number,
    power : Number,
})

export const model = mongoose.model("Bike" , BikeSchema);