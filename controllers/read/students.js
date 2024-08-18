const studentModel = require("../../models/students")

const allStudents = async(req,res)=>{
    let students = await studentModel.find()
    // console.log(students)
    res.json(students)
}

module.exports = allStudents