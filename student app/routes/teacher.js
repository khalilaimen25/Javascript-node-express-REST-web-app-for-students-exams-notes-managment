var express = require('express')
var router = express.Router()

var teacher = require('../controllers/teacher')

//add teacher page
router.get('/', teacher.add_teacher)

//update teacher page
router.get('/:id', teacher.update_teacher)

//add teacher
router.post('/', teacher.post_teacher)

//update teacher
router.put('/:id', teacher.put_teacher)

//delete teacher
router.delete('/:id', teacher.delete_teacher)

module.exports = router
