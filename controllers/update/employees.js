const bcrypt = require("bcrypt")
const employeeModel = require("../../models/employees")
const updateEmployee = async (req, res) => {
    // console.log(req.params, req.body)
    let fileName;
    console.log(req.files)
    let employee;
    if (req.files && req.body.password) {
        let file = req.files.file
        fileName = file.name
        await file.mv(`assets/images/${fileName}`);
        let hashPassword = await bcrypt.hash(req.body.password, 10)
        employee = await employeeModel.findOneAndUpdate({ _id: req.params.id }, {
            ...req.body,
            file: fileName,
            password: hashPassword
        }, { new: true })
        console.log(employee)
    }
    else if (req.files) {
        // console.log(file)
        let file = req.files.file
        fileName = file.name
        await file.mv(`assets/images/${fileName}`);
        employee = await employeeModel.findOneAndUpdate({ _id: req.params.id }, {
            ...req.body,
            file: fileName
        }, { new: true })
        console.log(employee)
    }
    else if (req.body.password) {
        let { file, password, ...rest } = req.body
        let hashPassword = await bcrypt.hash(password, 10)
        employee = await employeeModel.findOneAndUpdate({ _id: req.params.id }, {
            ...rest,
            password: hashPassword
        }, { new: true })
        console.log(employee)
        // else {
        //     let { file, password, ...rest } = req.body
        //     // console.log(rest)
        //     employee = await employeeModel.findOneAndUpdate({ _id: req.params.id }, rest, { new: true })
        //     employee = await employeeModel.findOneAndUpdate({ _id: req.params.id }, rest, { new: true })
        //     console.log(employee)
        // }
    }
    else {
        let { file, password, ...rest } = req.body
        employee = await employeeModel.findOneAndUpdate({ _id: req.params.id }, {
            ...rest,
        }, { new: true })
        console.log(employee)
    }
    res.json(employee)
    // console.log(student)
}

module.exports = updateEmployee