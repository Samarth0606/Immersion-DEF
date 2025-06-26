import UserModel from "../models/User.models.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import 'dotenv/config';
export async function register(req,res){
    try{
        let {fullName,email,password} = req.body;
        const user = await UserModel.findOne({email})
        if(user){
            return res.status(404).send("EMAIL ALREADY EXISTS")
        }else{
            const hash = bcrypt.hashSync(password, 10);
            let newUser = await UserModel.create({fullName,email,password:hash})
            return res.status(201).json(newUser)
        }
    }
    catch(err){
        return res.status(500).json({msg:err.message })
    }
}
export async function login(req,res){
    try{
        let {email,password} = req.body;
        const user = await UserModel.findOne({email});
        console.log(user,"user");
        if(!user){
            return res.status(404).json({msg:"User Does not exists" })
        }else{
            let verifiedUser = bcrypt.compareSync(password, user.password);
            if(!verifiedUser){
                return res.status(404).json({msg:"user credentials does not match" })
            }else{
                var token = jwt.sign({ id:user._id }, process.env.SECRET);
                return res.status(200).json({
                    data:{
                        fullName: user.fullName,
                        email: user.email,
                        password: user?.password
                    },
                    accessToken: token
                })
            }
        }
    }
    catch(err){
        return res.status(500).json({msg:err.message })
    }
}