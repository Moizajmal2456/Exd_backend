import express from "express";
import mongoose from "mongoose";
const app = express();


mongoose.connect("mongodb://0.0.0.0:27017/Exd-Backend");

mongoose.connection.on("connected" , () => {
  console.log("Connection established successfully");
})

mongoose.connection.on("Error" , () => {
  console.log("There is an error, cinnection not established");
})

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});