const mongoose = require('mongoose');
const schema = mongoose.Schema({
    Name:String,
    id:Number,
    age:Number,
    subject:String
})

module.exports = mongoose.model("Faculty" , schema);