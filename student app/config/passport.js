var LocalStrategy = require('passport-local').Strategy
var Teacher = require('../models/teacher')
var dbconfig = require('./database')
var bcrypt = require('bcryptjs')

module.exports = (passport) => {

    passport.use(new LocalStrategy( (username , password , done) => {
        var query = {username : username }
        Teacher.findOne(query, (err, teacher) =>{
            if(err) throw err
            if(!teacher){
                console.log("-*-*-*-*-*"+teacher)
                console.log('isResp false ======= 1')
                return done(null, false , {message : 'no user found'})
            }
            bcrypt.compare(password , teacher.password , (err, isEqual) =>{
                if(err) throw err
                if(isEqual){
                    if(teacher.isResp == 1){
                        console.log('isResp true =======')
                        return done(null, teacher)
                    }else{
                        console.log('isResp false =======')
                        return done(null, false, { message: 'wrong password' })
                    }            
                }else{
                    console.log('isResp false =======2')
                    return done(null , false , {message : 'wrong password'})
                }
            })
        })
    }))

   

    passport.serializeUser(function (teacher, done) {
        done(null, teacher.id);
    });

    passport.deserializeUser(function (id, done) {
        Teacher.findById(id, function (err, teacher) {
            done(err, teacher);
        });
    });
}

