const mongoose = require('mongoose');
const schema1 = mongoose.Schema({
    Username : String,
    Password : String
})

module.exports = mongoose.model("student" , schema1);