const enquiryModel = require("../../models/enquiry")


const deleteEnquiry = async(req,res)=>{
    console.log(req.body)
    let enquiry = await enquiryModel.deleteOne({_id:req.body.id})
    console.log(enquiry)
    res.json({message:"succesfully deleted"})
}

module.exports = deleteEnquiry