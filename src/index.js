import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import dotenv from "dotenv";
dotenv.config();

import express from "express"
const app =express()

app.get("/get", (req, res) => {
  res.send("🚀 Backend is working!");
});


;( async ()=> {
    try {
        await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR:",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is instning on port: ${process.env.port}`);
            
        })



} catch (error) {
    console.log("ERROR:",error);
    throw error;
    
    
}

})()