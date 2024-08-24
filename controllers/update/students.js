const studentModel = require("../../models/students")

const updateStudent = async (req, res) => {
    // console.log(req.params, req.body)
    let fileName;
    console.log(req.files)
    let student;
    if (req.files) {
        // console.log(file)
        let file = req.files.file
        fileName = file.name
        await file.mv(`assets/images/${fileName}`);
        student = await studentModel.findOneAndUpdate({ _id: req.params.id }, {
            ...req.body,
            file: fileName
        }, { new: true })
        console.log(student)
    }
    else {
        let { file, ...rest } = req.body
        // console.log(rest)
        student = await studentModel.findOneAndUpdate({ _id: req.params.id }, rest, { new: true })
        console.log(student)
    }
    res.json(student)
    // console.log(student)
}

module.exports = updateStudent