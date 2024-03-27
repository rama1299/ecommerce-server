const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController.js')
const authenticate = require('../middlewares/authenticate.js')
const authorize = require('../middlewares/authorize.js')

router.get('/user', authenticate, authorize(['admin']), UserController.findAll)
router.get('/user/:id', authenticate, authorize(['admin', 'customer']), UserController.findById)
router.put('/user/:id', authenticate, authorize(['admin', 'customer']), UserController.update)
router.delete('/user/:id', authenticate, authorize(['admin', 'customer']), UserController.delete)

module.exports = router