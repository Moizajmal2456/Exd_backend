import { Carmodel } from "../Models/Car"

export const createCar = async (req , res) => {
    try{
      const car = await Carmodel.create(req.body);
      res.status(200).Json({status: true , message: "Product car add successfully." , car})
    }
    catch (error) {
        res.status(400).Json({status: false, message:"There is an error. Product car does not add successfully." , error})
    }
}

export const getCar = async (req , res) => {
    try{
     const car = await Carmodel.find();
     res.status(200).Json({status: true , message:"Car" , car});
    }
    catch (error) {
        res.status(400).Json({status: true , message:"There is an error while getting product car. Error is" , error})
    }
}

export const getCarById = async (req , res) => {
    try {
      const car = await Carmodel.findById(req.id)
      res.status(200).Json({status: true , message:"Successfully get product." , car});
    }
    catch (error) {
        res.status(400).Json({status: true , message: "There is an error while getting product. Error is" , error})
    }
}

export const updateCar = async (req , res) => {
    try {
      const car = await Carmodel.findByIdAndUpdate( req.id , req.body);
      req.status(200).Json({status: true, message:"Successfully update car" , car})
    }
    catch (error) {
        res.status(400).Json({status: true , message:" Cannot update product. Error is" , error})
    }
}

export const deleteCar = async (req , res) => {
  try{
    const car = Carmodel.findByIdAndDelete(req.id);
    res.status(200).Json({status: true , message:"Successfully delete car"});
  }
  catch (error) {
    res.status(400).Json({staus: true , message:"Cannot delete car. Error is" , error})
  }
}