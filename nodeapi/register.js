const express= require("express");
const app=express();
const mongoose=require("mongoose")
const conn=require("./conn")

const menSchema= new mongoose.Schema({

        name:{
            type:String,
            trim:true,
            required:true
        },
        email:{
            type:String,
            required:true,
            trim:true,
        },
        address:{
            type:String,
            required:true,
            trim:true,
        },
        phone:{
            type:String,
            required:true,
            trim:true,
        },
        class:{
            type:String,
            required:true,
            trim:true,
        },
        fee:{
            type:Number,
            required:true,
            trim:true,
        },
        status:{
            type:String,
            required:true,
            trim:true,
        },
        
        date:{
            type:String,
            required:true,
            trim:true,
        },
        expirydate:{
            type:String,
            required:true,
            trim:true,
        },
        days:{
            type:String,
            required:true,
            trim:true,
        },
       
        
})

const Registerdatas= new mongoose.model("Registerdata1",menSchema);
module.exports=Registerdatas;