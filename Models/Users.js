import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    userName: String,
    email: String,
    password: String,
    token: String,
})

export const UsersModel = mongoose.model("User" , UserSchema);