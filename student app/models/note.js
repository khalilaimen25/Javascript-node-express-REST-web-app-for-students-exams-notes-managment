var mongoose = require('mongoose')

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var noteSchema = new Schema({
    id_student:{
        type: ObjectId,
        required:true
    },
    name_student:{
        type: String,
    },
    module:{
        type:String,
        required:true
    },
    value:{
        type:Number,
        required:true
    }
}) 

var note = module.exports = mongoose.model('note', noteSchema)