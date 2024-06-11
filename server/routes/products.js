var express = require('express');
var router = express.Router();
const productController=require('../controller/ProductController')

router.get('/all', productController.getAllProducts);
router.get('/famous', productController.getMostClickedProduct);
router.post('/add', productController.postProduct);
router.get('/requested', productController.getAllRequested);
router.delete('/remove/:id', productController.deleteProduct);
router.put('/clicked/:id', productController.updateViews);

module.exports = router;
