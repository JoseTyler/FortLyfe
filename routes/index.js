let express = require('express')
let router = express.Router()
const squadController = require('../controllers/squadController')
const gameController = require('../controllers/gameController')

// INDEX SQUAD
//START: api/v1
router.get('/squad/', squadController.index)

// CREATE SQUAD
router.post('/squad/', squadController.create)

// DELETE SQUAD
router.delete('/squad/:id', squadController.delete)

// SHOW SQUAD
router.get('/squad/:id', squadController.show)

// PUT SQUAD
router.put('/squad/:id', squadController.update)


//================================================

// INDEX GAMEPLAY
router.get('/game/', gameController.index)

// DELETE GAMEPLAY
router.delete('/game/:id', gameController.delete)

// SHOW GAMEPLAY
router.get('/game/:id', gameController.show)

// CREATE GAMEPLAY
router.post('/game/', gameController.create)

// PUT GAMEPLAY
router.put('/game/:id', gameController.update)


module.exports = router