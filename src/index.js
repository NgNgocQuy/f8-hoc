const express = require("express")
const morgan = require("morgan")
const handlebars = require("express-handlebars")
const path = require("path")
const port = process.env.PORT || 3000
const route = require ("./routes")
const bodyParser = require("body-parser")


const fs = require("fs")

console.log(__dirname);
const app = express()

const db = require("./config/db/db")

db.connect()

// app.use (morgan("combined"))
app.use(express.static(path.join(__dirname, "public")))

// templare engine
app.engine("hbs", handlebars.engine({
   extname: ".hbs"
}))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "resources/views"))

//bodyparser
app.use(bodyParser.urlencoded({extended:true}))

// route init
route(app)

app.listen(port, () => console.log("local host"))