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
     res.status(200).Json({status: true , message:"Car" , car})
    }
    catch (error) {
        res.status(400).Json({status: true , message:"There is an error while getting product car. Error is" , error})
    }
}
