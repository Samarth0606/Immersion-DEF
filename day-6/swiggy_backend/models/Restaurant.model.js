import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: String,
  deliveryTime: String,
  imageUrl: String,
  cuisines: String,
  rating: Number,
  address: String
});

const RestaurantModel = mongoose.model('Restaurant', restaurantSchema );
export default RestaurantModel