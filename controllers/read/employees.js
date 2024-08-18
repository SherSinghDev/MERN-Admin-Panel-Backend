const employeeModel = require("../../models/employees")

const allEmployees = async (req, res) => {
    let employees = await employeeModel.find()
    // console.log(students)
    res.json(employees)
}

module.exports = allEmployees