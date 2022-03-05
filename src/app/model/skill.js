const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Skill =   new Schema({
    SkillName : String,
    SkillContent : String,
    SkillId: String,
    SkillSort: String,
})
module.exports = mongoose.model ("Skill", Skill)