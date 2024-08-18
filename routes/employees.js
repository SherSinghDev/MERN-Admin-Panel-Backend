const express = require("express")
const createEmployee = require("../controllers/create/employees")
const allEmployees = require("../controllers/read/employees")
const deleteEmployee = require("../controllers/delete/employees")
const router = express.Router()


// Create a new employee
router.post("/createemployees", createEmployee)

// getting all employees
router.get("/allemployees", allEmployees)

// deleting a employee
router.post("/deleteemployee", deleteEmployee)

module.exports = router