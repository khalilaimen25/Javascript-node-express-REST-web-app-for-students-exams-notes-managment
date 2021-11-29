var mongoose = require('mongoose')

var reclamationShema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    filiere : {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: function (date) {
            return Date.now()
        },
        required: true
    },
    body:{
        type: String,
        required: true
    },
    owner:{
        type:String,
        required:true
    },
    to:{
        type:String,
        default:null
    }
})

var reclamation = module.exports = mongoose.model('reclamation', reclamationShema)