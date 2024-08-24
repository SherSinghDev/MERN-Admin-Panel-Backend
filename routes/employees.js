const express = require("express")
const createEmployee = require("../controllers/create/employees")
const allEmployees = require("../controllers/read/employees")
const deleteEmployee = require("../controllers/delete/employees")
const updateEmployee = require("../controllers/update/employees")
const router = express.Router()


// Create a new employee
router.post("/createemployees", createEmployee)

// getting all employees
router.get("/allemployees", allEmployees)

// deleting a employee
router.post("/deleteemployee", deleteEmployee)

// updating a employee
router.put("/updateemployee/:id", updateEmployee)

module.exports = router