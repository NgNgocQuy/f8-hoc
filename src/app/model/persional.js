const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Persional =   new Schema({
    PersionalName : String,
    PersionalContent : String,
    PersionalId: String
    
})
module.exports = mongoose.model ("Persional", Persional)