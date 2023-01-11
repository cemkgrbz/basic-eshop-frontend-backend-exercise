const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')

const userController = require('../controllers/userController')

const cartController = require('../controllers/cartController')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/list', auth, userController.list)
router.get('/findone/:_id', auth, userController.findOne)
router.delete('/delete/:_id', auth, userController.delete)
router.patch('/edit', auth, userController.edit)

router.post('/addtocart', cartController.addToCart)
router.post('/removefromcart', cartController.removeFromCart)
router.get('/listcart/:user', cartController.listCart)
router.post('/updatecart', cartController.updateCart)


router.post('/wishlist/add', userController.addToWishlist)
router.post('/wishlist/delete', userController.removeFromWishlist)
router.get('/wishlist/list/:user', auth, userController.listWishlist)

module.exports = router

