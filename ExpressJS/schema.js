const mongoose = require('mongoose');
const schema = mongoose.Schema({
    FacultyID: Number,
    FacultyNumber: String,
    FacultyInitial: String,
})

module.exports = mongoose.model("Faculty" , schema);