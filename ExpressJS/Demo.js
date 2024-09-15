const express = require('express');
const path = require('path');
const app = express();

app.get('/home' , (req,res)=>{
    res.sendFile("D:\\3RD SEM\\Web Technology\\JS Lab Manual.pdf")
})

app.get('/static' , express.static('pdf'));

app.listen(3001 , (req,res)=>{
    console.log("Started @ 3001")
})