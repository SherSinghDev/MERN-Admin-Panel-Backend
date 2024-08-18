const enquiryModel = require("../../models/enquiry")

const createEnquiry = async (req, res) => {
    console.log(req.body)
    let enquiry = await enquiryModel.findOne({ email: req.body.email })
    console.log(enquiry)
    let newEnquiry = true
    if (enquiry) {
        newEnquiry = false
        // res.json({ message: "Your Previouse request is pending.." })
    }
    else {
        newEnquiry = true
        let enquiry = await enquiryModel.create({ ...req.body })
        console.log(enquiry)
        // res.json({ message: "Succesfully Recieved Your Request.." })
    }
    res.json({ newEnquiry})
}

module.exports = createEnquiry