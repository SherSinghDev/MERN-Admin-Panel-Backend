const express = require("express")
const createStudent = require("../controllers/create/students")
const allStudents = require("../controllers/read/students")
const deleteStudent = require("../controllers/delete/students")
const router = express.Router()


// Create a new students
router.post("/createstudent",createStudent)

// getting all students
router.get("/allstudents",allStudents)

// deleting a students
router.post("/deletestudent", deleteStudent)

module.exports = router