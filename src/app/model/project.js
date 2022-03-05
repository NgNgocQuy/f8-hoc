const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Project = new Schema({
    ProjectId:String,
    Name: String,
    Image: String,
    Link: String,
    Github: String,
    Status: String,
    Decription: String,
})

module.exports = mongoose.model ("Project",Project)