var express = require('express');
var router = express.Router();
const orderController=require('../controller/OrderController')

router.post('/add', orderController.addOrder);
router.get('/all', orderController.loadAllOrders);

module.exports = router;