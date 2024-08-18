const mongoose = require("mongoose")

let employeeSchema = new mongoose.Schema({
    name:String,
    mobile:String,
    fatherName:String,
    education:String,
    address:String,
    file:String,
    email:String,
    role:String,
    password:String,
    department:String,
    date: String
})
const employeeModel = new mongoose.model("employee",employeeSchema)
module.exports = employeeModel