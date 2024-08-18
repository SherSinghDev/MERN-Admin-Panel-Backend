const studentModel = require("../../models/students")


const deleteStudent = async(req,res)=>{
    console.log(req.body)
    let student = await studentModel.deleteOne({_id:req.body.id})
    console.log(student)
    res.json({message:"succesfully deleted"})
}

module.exports = deleteStudent