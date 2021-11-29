var express = require('express')
var router = express.Router()

var student = require('../controllers/student')


//add student page
router.get('/', student.add_student)

//update student page
router.get('/:id', student.update_student)

//add student
router.post('/', student.post_student)

//update student
router.put('/:id', student.put_student)

//delete student
router.delete('/:id', student.delete_student)

//add note page
router.get('/:id/note', student.add_note)

//update note page
router.get('/:id_et/note/:id', student.update_note)

//add note
router.post('/:id/note', student.post_note)

//update note 
router.put('/note/:id', student.put_note)

//delete note 
router.delete('/note/:id', student.delete_note)


module.exports = router
