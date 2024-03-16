import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
    productName : String,
    productType : String,
    quantity : Number,
})
export const ProductModel = mongoose.model("Product" , ProductSchema);