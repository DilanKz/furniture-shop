var express = require('express');
var router = express.Router();
let userController = require('../controller/UserController');
/* GET users listing. */
router.post('/signUp', userController.saveUserCredentials);
router.post('/reset', userController.getOTP);
router.post('/change', userController.updatePassword);
router.post('/update', userController.updateCredentials);
router.post('/swap', userController.swapAccount);
router.post('/getOne', userController.getOne);
router.get('/stats', userController.getStats);
router.post('/favorites', userController.updateFavorite);
router.post('/cart', userController.updateCart);
router.post('/address', userController.updateAddress);
router.delete('/remove-cart', userController.removeFromCart);

module.exports = router;
