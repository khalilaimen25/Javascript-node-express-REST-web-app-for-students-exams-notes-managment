var mongoose = require('mongoose')

var studentShema = mongoose.Schema({
    fullname: {
        type : String,
        required : true
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
    filiere: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
})

var student = module.exports = mongoose.model('student', studentShema)