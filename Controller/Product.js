import { ProductModel } from "../Models/Products"

export const createProduct = async (req , res) => {
    try {
      const product = await ProductModel.create(req.body);
      res.status(200).Json({success: true , message:"Product add successfully."});
    }
    catch (error) {
       res.status(400).Json({success: false , message:"There is an error. Product does not add successfully."})
    }
}

export const getProduct = async (req , res) => {
  try{
    const product = await ProductModel.find();
    res.status(200).Json({success: true , message:"Products" , product});
  }
  catch (error) {
    res.status(400).Json({success: false , message:"Products not found. Error is" , error});
  }
}

export const getProductById = async(req , res) => {
  try {
    const product = await ProductModel.findById(req.id);
    res.status(200).Json({success: true , message:"Product found" , product});
  }
  catch (error) {
    res.status(400).Json({success: false , message:"Product not found. Error is" , error});
  }
}

export const updateProduct = async(req , res) => {
  try {
   const product = await ProductModel.findByIdAndUpdate(req.id , req.body);
   res.status(200).Json({success: true , message:"Product updated successfully." , product});
  }
  catch (error) {
    res.status(400).Json({success: false , message:"Product not update. Error is" , error});
  }
}

export const deleteProduct = async(req , res) => {
  try{
    const product = await ProductModel.findByIdAndDelete(req.id);
    res.status(200).Json({success: true , message:"User delete successfully."});
  }
  catch (error) {
    res.status(200).Json({success: false , message:"User does not delete. Error is" , error});
  }
}

exports.createUser = async (userData) => {
  return await User.create(userData);
};