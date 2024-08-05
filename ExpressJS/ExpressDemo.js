const express = require('express');
const app = express();

app.get('/' , (req,res)=>{
    res.send('hello world');

})

app.post('/' , (req,res)=>{
    res.send('hello world from post');

})

app.listen(3000, ()=>{
    console.log("Server started at 3000")
})