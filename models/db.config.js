const mongoose = require("mongoose")

// Database Connection
function connection() {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("connencted");
    }
    catch(e){
        console.log(e);
    }      
}


module.exports = connection


