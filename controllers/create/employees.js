const employeeModel = require("../../models/employees")
const bcrypt = require("bcrypt")

async function createEmployee(req, res) {
    console.log(req.body)
    // console.log(req.files.file.name); // Access the uploaded file details
    let password = req.body.password
    let hashPassword = await bcrypt.hash(password, 10)
    let fileName;
    if (req.files.file) {
        let file = req.files.file
        fileName = file.name
        await file.mv(`assets/images/${fileName}`);
    }
    let employee = await employeeModel.create({
        ...req.body,
        file: fileName||"",
        password: hashPassword
    })
    console.log(employee)


    res.json(employee);
}

module.exports = createEmployee