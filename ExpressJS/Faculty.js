const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Faculty = require('./schema');

mongoose.connect("mongodb+srv://niravvaghasia:nirav@cluster0.mpmom.mongodb.net/")
.then(()=>{
    const app = express();
    app.use(bodyParser.urlencoded({extended: false}))

    //code

    app.listen(3000, ()=>{
        console.log("Runnig at 3000");
    })
})