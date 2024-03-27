const express = require('express');
const router = express.Router();

const productRouter = require('./productRouter.js')
const authRouter = require('./authRouter.js')
const userRouter = require('./userRouter.js')
const shipmentRouter = require('./shipmentRouter.js')


router.use(productRouter)
router.use(authRouter)
router.use(userRouter)
router.use(shipmentRouter)

module.exports = router