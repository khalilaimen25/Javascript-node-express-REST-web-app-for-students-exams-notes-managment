/************ app variables **************/
var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
// var bcryptjs = require('bcryptjs')
var expressValidator = require('express-validator');
var messages = require('express-messages')
var flash = require('connect-flash')
var dbconfig = require('./config/database')
var session = require('express-session')
var morgan = require('morgan')
var jwt = require('jsonwebtoken')
var app = express()

/************ app mongodb *****************/

mongoose.connect(dbconfig.database)
var db = mongoose.connection

db.once('open' , ()=>{
    console.log('connected to mongodb...')
})

db.on('error', (err) => {
    console.log('mongodb error ===> '+err)
})

/************ app middlewares *************/

app.engine('ejs', require('ejs-locals'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.use(session({
    secret: 'mysecretkey',
    resave: true,
    saveUninitialized: true
}))

app.use(cookieParser())

app.use(flash())
app.use(function (req, res, next) {
    res.locals.messages = messages(req, res)
    next()
})    

app.use(morgan('dev'))

app.use(expressValidator())

/************ app models ******************/

// var Teacher = require('./models/teacher')
// var Student = require('./models/student')
// var Reclamation = require('./models/reclamation')

/************ app routes ******************/

// var student = require('./routes/student')
// app.use('/student', student)

// var teacher = require('./routes/teacher')
// app.use('/teacher', teacher)

/******* */
var root = require('./routes/root')
app.use('/', root)

var reclamation = require('./routes/reclamation')
app.use('/reclamation', reclamation)

var student = require('./routes/student')
app.use('/student', student)

var teacher = require('./routes/teacher')
app.use('/teacher', teacher)

var actuality = require('./routes/actuality')
app.use('/actuality', actuality)

/************ app views *******************/


app.listen(8888, ()=>{
    console.log('connected to server at 127.0.0.1:8888...')
})
