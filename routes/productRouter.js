const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController.js')
const authorize = require('../middlewares/authorize.js')
const authenticate = require('../middlewares/authenticate.js')

router.get('/product', ProductController.findAll)
router.get('/product/:id', ProductController.findById)
router.post('/product', authenticate, authorize(['admin']), ProductController.create)
router.put('/product/:id', authenticate, authorize(['admin']), ProductController.update)
router.delete('/product/:id', authenticate, authorize(['admin']), ProductController.delete)

module.exports = router