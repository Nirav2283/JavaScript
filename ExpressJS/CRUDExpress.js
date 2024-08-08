const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

const students = [
    {
        Name:"Nirav",
        id:1,
        email:"nirav@gmail.com",
        spi:9

    },
    {
        Name:"Ronit",
        id:2,
        email:"ronit@gmail.com",
        spi:10
    }
]

//read
app.get('/students' , (req,res)=>{
    res.send(students);
})

//read by index
app.get('/students/:index' ,(req,res)=>{
    res.send(students[req.params.index]);
})

//add students(create)
app.post('/students' , (req,res)=>{
    students.push(req.body);
    res.send("Added");
})


//update
app.patch('/students/:name' , (req,res)=>{
    const update = students.findIndex((stu)=>{
        if(stu.Name == req.params.name){
            return true;
        }
    })
    students[update]= req.body;
    res.send("Student Updated")
})

//delete
app.delete('/students/:id' , (req,res)=>{
    const index = students.findIndex((stu)=>{
        if(stu.id == req.params.id){
            return true;
        }
    })
    students.splice(index,1) ;
    res.send("Student Deleted");
});

app.listen(5001 , ()=>{
    console.log("Running on 5001");
})