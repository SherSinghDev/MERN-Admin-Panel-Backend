const mongoose = require("mongoose")

const enquirySchema = new mongoose.Schema({
    email:String,
    message:String
})


const enquiryModel = new mongoose.model("enquiry",enquirySchema)
module.exports = enquiryModel