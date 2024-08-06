const express = require('express');
const path = require('path');
const app = express();

app.get('/' , (req,res)=>{
    res.sendFile(('D:\\2ND SEM\\WD Programme\\form2.html'));
})

app.get('/home' ,(req,res)=>{
    res.sendFile(path.join(__dirname , 'nirav.txt'));
})
app.get('/about' , (req,res)=>{
    res.sendFile("D:\\2ND SEM\\WD Programme\\form1.html");
})

app.get('/contact' , (req,res)=>{
    res.sendFile("D:\\2ND SEM\\WD Programme\\lab8(III).html");
})
app.get('/service' , (req,res)=>{
    res.send("Service");
})
app.listen(3000, ()=>{
    console.log("Started");
})