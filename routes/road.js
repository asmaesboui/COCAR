const express = require('express')
const router = express.Router()
const controller = require('../controllers/roadController')


//get all raod 
router.get('/',controller.getallRoads)
//get a road by its user 
router.get('/user/:user_id',controller.getRoads)
//get road by search with departure and destination
router.get('/:user_id/search', controller.searchRoad)
//add a new road
router.post('/:user_id',controller.addRoad)
//update road info
router.put('/:road_id',controller.updateRoad)
//get road by id
router.get('/:road_id',controller.getRoad)
//delete road by id
router.delete('/:_id', controller.deleteRoads)
//get road by id
router.get('/:_id', controller.getRoadsById)
//update road =
router.put('/user/:_id',controller.EditeRoads)

module.exports = router