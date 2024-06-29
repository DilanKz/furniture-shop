var express = require('express');
var router = express.Router();
const orderController=require('../controller/OrderController')

router.post('/add', orderController.addOrder);
router.get('/all', orderController.loadAllOrders);
router.post('/approve', orderController.approve);
router.post('/deny', orderController.denied);

module.exports = router;