const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Product = new Schema({
    Name: String,
    Position: String,
    Office: String,
    Age: String,
    Startdate: String,
    Salary: String
})

module.exports = mongoose.model ("Product",Product)