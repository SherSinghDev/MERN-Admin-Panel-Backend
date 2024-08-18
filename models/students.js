const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name:String,
    mobile:String,
    studentId:String,
    fatherName:String,
    address:String,
    course:String,
    courseFee:String,
    file:String,
    // date:{
    //     type:Date,
    //     default:new Date().toLocalString()
    // }
    date:String
})


const studentModel = new mongoose.model("student",studentSchema)
module.exports = studentModel