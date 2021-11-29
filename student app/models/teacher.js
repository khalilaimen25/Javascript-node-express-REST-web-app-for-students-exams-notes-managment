var mongoose = require('mongoose')

var teacherShema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    codeModule: {
        type: String,
        required: true
    },
    isResp: {
        type: Number,
        default: 0
    }
})

var teacher = module.exports = mongoose.model('teacher', teacherShema)