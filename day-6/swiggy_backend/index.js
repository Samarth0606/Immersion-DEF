import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
const app = express();
import restaurantRoutes from './routes/restaurant.routes.js'
import userRoutes from './routes/user.routes.js'

mongoose.connect('mongodb://127.0.0.1:27017/swiggy_backend')
.then(()=>{ console.log("DB CONNECTED SUCCESSFULLY")  })
.catch((ERR)=>{ console.log("DB FAILED" , ERR) })

app.use(express.json())// body

app.get('/' , (req,res)=>{
    res.send("welcome to root route")
})

restaurantRoutes(app);
userRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{
    console.log(`server connected at port: ${PORT}`);
})

// samarthvohraindia
// HiwWJyrzZJ0qBuVl








