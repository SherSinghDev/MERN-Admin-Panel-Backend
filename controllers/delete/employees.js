const employeeModel = require("../../models/employees")


const deleteEmployee = async(req,res)=>{
    console.log(req.body)
    let employee = await employeeModel.deleteOne({_id:req.body.id})
    console.log(employee)
    res.json({message:"succesfully deleted"})
}

module.exports = deleteEmployee