const studentModel = require("../../models/students")

async function createStudent(req, res) {
    console.log(req.body)
    // console.log(req.files.file.name); // Access the uploaded file details
    let fileName;
    if (req.files.file) {
        let file = req.files.file
        fileName = file.name
        await file.mv(`assets/images/${fileName}`);
    }
    let student = await studentModel.create({
        ...req.body,
        file: fileName || "",
    })
    console.log(student)

    res.json(student);
}

module.exports = createStudent