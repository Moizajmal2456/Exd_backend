import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
    productName : String,
    productType : String,
    quantity : Number,
})
export const model = mongoose.model("product" , ProductSchema);