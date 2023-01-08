const express = require('express');

const router = express.Router();

const userController  = require('../controllers/userController.js')

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/list', userController.list);
router.get('/findone/:_id', userController.findOne);
router.delete('/delete/:_id', userController.delete);
router.patch('/edit', userController.edit);
router.post('/addtocart', userController.addToCart);
router.post('/removefromcart', userController.removeFromCart);
router.post('/wishlist/add', userController.addToWishlist)
router.post('/wishlist/delete', userController.removeFromWishlist)
router.get('/wishlist/list/:user', userController.listWishlist)





module.exports = router
