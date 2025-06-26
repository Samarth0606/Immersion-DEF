import { createRestaurant, deleteRestaurant, fetchRestaurant, updateRestaurant } from "../controllers/restaurant.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

function restaurantRoutes(app){
    app.get('/api/restaurants', verifyToken , fetchRestaurant),
    app.post('/api/restaurant' ,createRestaurant),
    app.patch('/api/restaurant/:idd', updateRestaurant)
    app.delete('/api/restaurant/:idd', deleteRestaurant)
}

export default restaurantRoutes;




