const express = require("express")
const app = express()
const session = require("express-session")
const cors = require("cors")
const multer = require("multer")
const fileUpload = require("express-fileupload")


// Middle Ware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static("assets"))
// app.use(multer({dest:"./routes"}))
app.use(cors({ origin: ["http://localhost:5173",'*'],credentials:true }))
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "hi hi hi hi"
}))

app.use(fileUpload({
    tempFileDir: "/temp/",
    useTempFiles: true
}))

module.exports = { app }