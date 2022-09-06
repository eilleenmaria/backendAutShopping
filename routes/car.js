const express = require('express');
const router = express.Router();
const carcontroller = require('../controllers/carcontroller')
// api/car
router.post('/', carcontroller.crearCar);
router.get('/', carcontroller.getCar);
router.put('/:id', carcontroller.updateCar);
router.get('/:id', carcontroller.getOneCar);
router.delete('/:id', carcontroller.deleteCar);
module.exports = router