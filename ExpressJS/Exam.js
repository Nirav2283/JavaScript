const express = require('express');
const app = express();

app.get('/ab?cd' , (req,res)=>{
    res.send("hello")
})

app.listen(3000 , (req,res)=>{
    console.log("started @ 3000");
})