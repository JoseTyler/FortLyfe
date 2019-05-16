let express = require('express')
let router = express.Router()
const squadController = require('../controllers/squadController')

// INDEX SQUAD
router.get('/', squadController.index)

// NEW SQUAD
router.get('/new', squadController.new)

// DELETE SQUAD
router.delete('/:id', squadController.delete)

// SHOW SQUAD
router.get('/:id', squadController.show)

// CREATE SQUAD
router.post('/', squadController.create)

module.exports = router