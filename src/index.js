import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import dotenv from "dotenv";
dotenv.config();

import express from "express"
const app =express()

app.get("/", (req, res) => {
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

.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`DB connected at: ${process.env.PORT}`);
        
    })
})
.catch((error)=>{
    console.log("MONGODB connection failde",error);
    
})