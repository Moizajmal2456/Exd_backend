import mongoose, { Schema } from "mongoose";

const CarSchema = new Schema ({
    carName: String,
    brandName : String,
    year : Number,
    power : Number,
})

export const Carmodel = mongoose.model("Car" , CarSchema);