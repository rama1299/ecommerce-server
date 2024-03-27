const express = require('express');
const router = express.Router();
const ShipmentController = require('../controllers/shipmentController.js')
const authenticate = require('../middlewares/authenticate.js')
const authorize = require('../middlewares/authorize.js')

router.get('/shipment',  ShipmentController.findAll)
// router.get('/user/:id', authenticate, authorize(['admin', 'customer']), ShipmentController.findById)
// router.put('/user/:id', authenticate, authorize(['admin', 'customer']), ShipmentController.update)
// router.delete('/user/:id', authenticate, authorize(['admin', 'customer']), ShipmentController.delete)

module.exports = router