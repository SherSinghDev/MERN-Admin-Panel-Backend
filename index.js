const { app } = require("./app")
const connection = require("./models/db.config")
const studentModel = require("./models/students")
const studentsRoute = require("./routes/student")
const employeesRoute = require("./routes/employees")
const employeeModel = require("./models/employees")
const enquiryRoute = require("./routes/enquiry")
const bcrypt = require("bcrypt")
require('dotenv').config();

connection()


// username - shersingh741730
// password - felisleo@mongo

// cluster - mongodb+srv://shersingh741730:felisleo@mongo@cluster0.g9i9a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



app.use("/students", studentsRoute)
app.use("/employees", employeesRoute)
app.use("/enquiry",enquiryRoute )

app.get("/", (req, res) => {
    res.send("hello world")
})
app.post("/login", async (req, res) => {
    // console.log(req.body)
    if (req.body.email && req.body.password) {
        let employee = await employeeModel.findOne({ email: req.body.email })
        let valid = false
        // console.log(employee)
        if (employee) {
            let validPass = await bcrypt.compare(req.body.password, employee.password)
            if (validPass) {
                req.session.userId = employee._id
                valid = true
                // console.log(req.session)
                res.json({ valid })
            }
            else {
                res.json({ message: "Password is wrong" })
            }
        }
        else {
            res.json({ message: "User Not Found" })
        }
    }
    else {
        res.json({ message: "Enter Valid Details" })
    }
})

app.get("/authorized",async(req,res)=>{
    // console.log(req.session)
    let valid = false
    let user;
    if(req.session.userId){
        valid = true
        user = await employeeModel.findOne({_id:req.session.userId})
        // console.log(user)
    }
    res.json({valid,user})
})
app.post("/logout",(req,res)=>{
    req.session.userId = ""
    console.log(req.session)
    res.json({logout:true})

})
app.get("/getstudent/:id",async(req,res)=>{
    // console.log(req.params)
    let student = await studentModel.findOne({_id:req.params.id})
    res.json(student)
})
app.get("/getemployee/:id",async(req,res)=>{
    // console.log(req.params)
    let employee = await employeeModel.findOne({_id:req.params.id})
    res.json(employee)
})

app.listen(process.env.PORT, () => {
    console.log("Listening to the port 3000....")
})