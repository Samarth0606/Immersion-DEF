import RestaurantModel from "../models/Restaurant.model.js";



export async function createRestaurant(req,res){
    try{
        const newRestaurant = await RestaurantModel.create(req.body);
        return res.status(201).json(newRestaurant)
    }
    catch(err){
        return res.status(500).json({msg:err.message })
    }
}
export async function fetchRestaurant(req,res){
    try{
        const allRestaurant = await RestaurantModel.find({});
        return res.status(200).json(allRestaurant)
    }
    catch(err){
        return res.status(500).json({msg:err.message })
    }
}



