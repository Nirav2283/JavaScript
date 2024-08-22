const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Faculty = require('./schema');
require('dotenv').config();

mongoose.connect("mongodb+srv://"+process.env.DBUN+":"+process.env.DBPASS+"@cluster0.mpmom.mongodb.net/test")
.then(()=>{
    console.log("Connected with MongoDB");
    const app = express();
    app.use(bodyParser.urlencoded())

    app.get('/home' , (req,res)=>{
        res.send("Hello from home")
    })

    //get
    app.get('/faculties' , async(req,res)=>{
        const ans = await Faculty.find();
        res.send(ans);
    })

    //getById

    app.get('/faculties/:id' , async (req,res)=>{
        const ans = await Faculty.findOne({
            id:req.params.id
        })
        res.send(ans);
    })

    //create

    app.post('/faculties' , async (req,res)=>{
        fac = new Faculty({...req.body});
        const ans = await fac.save();
        res.send(ans);

    })

    //update 

    app.patch('/faculties/:id' , async(req,res)=>{
        const  fac = await Faculty.findOne({id:req.params.id})
        fac.Name = req.body.Name
        fac.id = req.body.id
        fac.age = req.body.age
        fac.subject = req.body.subject

        const ans = await fac.save();
        res.send(ans);
        
    })

    //delete by ID

    app.delete('/faculties/:id' , async(req,res)=>{
        const ans = await Faculty.deleteOne({id:req.params.id});
        res.send(ans);
    })

    //search By Character

    app.get('/faculties/search/:text' , async(req,res)=>{
        const ans = await Faculty.find({
            Name : {
                $regex : req.params.text
            }
        })
        res.send(ans)
    })
    app.listen(process.env.PORT, ()=>{
        console.log("Running at "+process.env.PORT);
    })
})