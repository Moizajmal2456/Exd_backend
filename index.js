import express from "express";
import mongoose from "mongoose";
import productRoutes from "../Routes/ProductRoutes.js";
const app = express();
app.use(express.json());

app.use("/product" , productRoutes);

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