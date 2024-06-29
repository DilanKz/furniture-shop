var express = require('express');
var router = express.Router();
const productController=require('../controller/ProductController')

router.get('/all', productController.getAllProducts);
router.get('/all/extra', productController.getAllProductsWithExtra);
router.post('/one', productController.getOneProduct);
router.get('/famous', productController.getMostClickedProduct);
router.post('/add', productController.postProduct);
router.put('/update', productController.updateProduct);
router.get('/requested', productController.getAllRequested);
router.delete('/remove/:id', productController.deleteProduct);
router.put('/clicked/:id', productController.updateViews);

module.exports = router;
