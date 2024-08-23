const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const students = require("./AtlasAPISchema");
//mongodb+srv://hetp5852:patelhet123@cluster0.qwpgm.mongodb.net/
mongoose.connect("mongodb+srv://hetp5852:patelhet123@cluster0.qwpgm.mongodb.net/Student_detail",{}).then(() => {
    const app = express();
    app.use(bodyParser.urlencoded);

    app.get("/students", async (req,res)=>{
        const Stu = await students.find();
        res.send(Stu);
    });

    app.get("/students/:id",async (req,res)=>{
        const Stu2 = await students.findOne({_id : req.params.id});
        res.send(Stu2);
    });

    app.post('/add',async (req,res) => {
        const stu = new students({
            _id: mongoose.Schema.Types.ObjectId(),
            name : req.body.name,
            sem : req.body.sem,
            age : req.body.age,
        });
        const stu1 = new students({_id: mongoose.Schema.Types.ObjectId(),...req.body});
        await stu1.save();
        res.send(stu1);

    });

    app.listen(3000,(req,res)=>{
        console.log("Server started @ 3000.");
    })
})


