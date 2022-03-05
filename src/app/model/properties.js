const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Properties =   new Schema({
    PropertiesName : String,
    PropertiesContent : String,
    PropertiesId: String,
    PropertiesSort: String,
})
module.exports = mongoose.model ("Properties", Properties)