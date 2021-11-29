var express = require('express')
var router = express.Router()

var reclamation = require('../controllers/reclamation')




//delete reclamation
router.delete('/:id', reclamation.delete_reclamation)

//send responsible reclamation page
router.get('/responsible', reclamation.responsible_reclamation)

//send teacher reclamation page
router.get('/teacher', reclamation.teacher_reclamation)


//specific reclamation
router.get('/:id', reclamation.reclamation)

//post responsible reclamation
router.post('/responsible', reclamation.post_responsible_reclamation)

//post teacher reclamation
router.post('/teacher', reclamation.post_teacher_reclamation)  

module.exports = router