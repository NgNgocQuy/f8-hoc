const mongoose = require("mongoose")

const Schema = mongoose.Schema

const MyProfile = new Schema({
    Name: String,
    PersionalId: String,
    SkillId: String,
    PropertiesId: String,
    note: String,
})

module.exports = mongoose.model ("MyProfile", MyProfile)