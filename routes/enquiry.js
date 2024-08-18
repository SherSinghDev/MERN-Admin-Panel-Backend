const express = require("express")
const createEnquiry = require("../controllers/create/enquiry")
const allEnquiry = require("../controllers/read/enquiry")
const deleteEnquiry = require("../controllers/delete/enquiry")
const router = express.Router()

router.post("/newenquiry",createEnquiry)
router.get("/allenquiry",allEnquiry)
router.post("/deleteenquiry",deleteEnquiry)

module.exports = router