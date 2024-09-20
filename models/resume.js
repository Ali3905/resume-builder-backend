const mongoose = require("mongoose")

const resumeSchema = mongoose.Schema({
    personalInfo: {
        type: {
            name: String,
            email: String,
            websiteLink: String,
            linkedinLink: String,
            mobileNumber: String,
            summary: String,
        }
    },
    workExperience: {
        type: [{
            role: String,
            companyName: String,
            responsibilities: String
        }]
    },
    education: {
        type: [{
            institute: String,
            program: String,
            description: String,
        }]
    },
    projects: {
        type: [{
            title: String,
            description: String
        }]
    },
    skills: {
        type: []
    }
}, { timestamps: true })

const resume = mongoose.model("resume", resumeSchema)
module.exports = resume