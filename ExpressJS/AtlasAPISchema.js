const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    _id : Number,
    name : String,
    sem : Number,
    age : Number
});

module.exports = mongoose.model("students",schema);


