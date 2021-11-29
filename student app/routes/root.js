var express = require('express')
var router = express.Router()

var root = require('../controllers/root')

router.get('*', (req, res, next) => {

    res.locals.user = null
    res.locals.nmbrRec = req.cookies['nmbrRec'] || null

    next()
})

router.get('/', root.index)

router.get('/about', root.about) 

router.get('/dashboard', root.dashboard)

router.get('/login', requireLogedIn("login"), root.login_page)

router.post('/login' ,root.login)

router.get('/logout', requireLogedIn("logout") ,root.logout)

//students list
router.get('/students', root.students)

//teachers list
router.get('/teachers', root.teachers)

//reclamations list
router.get('/reclamations', root.reclamations)

router.get('/notes', root.notes)

router.get('/actualities', root.actualities)

router.get('/pv',root.pv)

router.get('/account',root.edit_account)

router.put('/account', root.put_account)

function requireLogedIn(etat) {
    return function (req, res, next) {
        if (etat == "login") {
            if (!req.cookies['token']) {
                next()
            } else {
                req.flash('info', 'you are alredy loged in !')
                res.redirect('/');
            }
        }
        if (etat == "logout") {
            if (req.cookies['token']) {
                next();
            } else {
                req.flash('info', 'you have to be loged in first !')
                res.redirect('/');
            }
        }
    }
}

module.exports = router