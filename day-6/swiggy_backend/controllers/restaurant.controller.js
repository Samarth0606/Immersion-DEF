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

export async function updateRestaurant(req,res){
    try{
        let {idd} = req.params;
        let {name,deliveryTime,cuisine,rating,imageUrl,address} = req.body;
        const updatedRest = await RestaurantModel.findByIdAndUpdate(idd,{name,deliveryTime,cuisine,rating,imageUrl,address},{new:true});
        return res.status(200).send(updatedRest)
    }
    catch(err){
        return res.status(500).json({msg:err.message })
    }
}

export async function deleteRestaurant(req,res){
    try{
        let {idd} = req.params;
        const deletedRest = await RestaurantModel.findByIdAndDelete(idd);
        return res.status(200).send(deletedRest)
    }
    catch(err){
        return res.status(500).json({msg:err.message })
    }
}
