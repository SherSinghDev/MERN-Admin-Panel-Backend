const mongoose = require("mongoose")

// Database Connection
function connection() {
    mongoose.connect("mongodb://localhost:27017/DemoCompany")
}


module.exports = connection


