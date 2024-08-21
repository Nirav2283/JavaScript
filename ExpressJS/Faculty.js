const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Faculty = require('./schema');
require('dotenv').config();
mongoose.connect("mongodb+srv://"+process.env.DBUN+":"+process.env.DBPASS+"@cluster0.mpmom.mongodb.net/")
.then(()=>{
    const app = express();
    app.use(bodyParser.urlencoded({extended: false}))

    //code

    app.listen(process.env.PORT, ()=>{
        console.log("Running at "+process.env.PORT);
    })
})