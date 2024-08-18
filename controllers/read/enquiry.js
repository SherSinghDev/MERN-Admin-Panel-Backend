const enquiryModel = require("../../models/enquiry")
const allEnquiry = async(req,res)=>{
    let allEnquiries = await enquiryModel.find()
    console.log(allEnquiries)
    res.json(allEnquiries)
}

module.exports = allEnquiry