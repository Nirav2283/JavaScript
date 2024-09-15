const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const student = require('./NewSchema');
const app = express();
require('dotenv').config();
app.use(bodyParser.urlencoded())

mongoose.connect("mongodb+srv://niravvaghasia:nirav@cluster0.mpmom.mongodb.net/")
.then(()=>{
    console.log("Connected with MongoDB");

    app.use('/' , (req,res,next)=>{
    if(req.body.UN=="Nirav" && req.body.PW=="Vaghasia"){
        next();
    }
    else{
        res.send("Unauthorized");
    }
    })

    
    app.get('/admin/first',(req,res)=>{
        res.send("First from admin")    
    });

    app.get('/admin/second',(req,res)=>{
        res.send("Second from admin")    
    });

    app.listen(process.env.PORT, ()=>{
        console.log("Running at @ "+process.env.PORT);
    })

})






