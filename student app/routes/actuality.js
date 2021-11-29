var express = require('express')
var router = express.Router()

var actuality = require('../controllers/actuality')

router.get('/', actuality.actuality)

router.get('/:id', actuality.read_actuality)

router.post('/', actuality.post_actuality)

router.delete('/:id', actuality.delete_actuality)


module.exports = router